// Import required modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose'); 

const routes = require('./routes/routes');
const User = require('./modals/user'); 

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/evento', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(helmet());
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render('practice', { title: 'Practice Page' });
});


app.get('/aboutus', (req, res) => res.render('aboutus', { title: 'About Us' }));
app.get('/admin', (req, res) => res.render('admin', { title: 'Admin Page' }));
app.get('/arts', (req, res) => res.render('arts', { title: 'Arts Page' }));
app.get('/books', (req, res) => res.render('books', { title: 'Books Page' }));
app.get('/contactus', (req, res) => res.render('contactuss', { title: 'Contact Us' }));
app.get('/fictional', (req, res) => res.render('fictional', { title: 'Fictional Page' }));
app.get('/literature', (req, res) => res.render('literature', { title: 'Literature Page' }));
app.get('/login-ejs', (req, res) => res.render('login', { title: 'Login Page' }));
app.get('/practice', (req, res) => res.render('practice', { title: 'Practice Page' }));
app.get('/register', (req, res) => res.render('register', { title: 'Register Page' }));
app.get('/social', (req, res) => res.render('social', { title: 'Social Page' }));


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.use(routes);

app.get('/block-test', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('File read error');
        res.send(data);
    });
});

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    try {
        let jsonData = [];
        if (fs.existsSync('data.json')) {
            jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
        }
        jsonData.push(formData);
        fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));
        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error writing to file:', error);
        res.status(500).json({ message: 'Error saving data' });
    }
});


const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user', password: 'user123' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.cookie('user', username, { httpOnly: true, secure: false });
        res.json({ message: 'Login successful', user: username });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.json({ message: 'Logout successful' });
});


app.get('/users/:id', (req, res) => {
    res.json({ message: `User ID received: ${req.params.id}` });
});


app.post('/save-user', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json({ message: 'User saved to MongoDB' });
    } catch (error) {
        console.error('MongoDB save error:', error);
        res.status(500).json({ message: 'Error saving user to MongoDB' });
    }
});


app.use((req, res) => res.status(404).send('Page Not Found'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
