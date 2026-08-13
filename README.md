# 📚 BookVibe — Online Book Management Platform

<p align="center">
  <strong>Discover, read, wishlist, and manage your favorite books with BookVibe.</strong>
</p>

<p align="center">
  A modern React-based book management application with dynamic routing,
  local JSON data fetching, authentication, wishlist management,
  reading progress visualization, and responsive UI.
</p>

---

## 🌐 Live Project

- **[Live Website:](https://reliable-cascaron-f6772d.netlify.app/)**
- **[GitHub Repository:](https://github.com/shariful-ire/Book-Vibe)** 

---

## ✨ Features

### 📖 Book Features

- Browse available books
- Responsive book cards
- View detailed information about individual books
- Display book title, author, cover image, review, pages, rating, category, tags, publisher, and publication year
- Add books to the reading list
- Remove books from the reading list
- Add/remove books from wishlist
- Prevent duplicate books from being added

### 📊 Reading Progress

- Dedicated **Pages To Read** page
- Visual reading progress using a chart
- Dynamically calculate total pages
- Chart updates when books are added or removed

### 🔐 Authentication

- Sign Up page
- Sign In page
- Demo login account
- Login/logout functionality
- User name displayed dynamically in navbar
- Authentication state persisted using `localStorage`

### 🧭 Navigation

- React Router based navigation
- Client-side navigation without unnecessary reloads
- Active navigation links
- Dynamic book details route
- Custom error/404 page
- Responsive mobile navigation

### 📱 Responsive Design

- Mobile friendly
- Tablet friendly
- Desktop friendly
- Responsive navbar, cards, details page, and chart

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend UI |
| React Router | Client-side routing |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling |
| DaisyUI | UI components |
| Vite | Development/build tool |
| Local JSON | Book data source |
| React Hooks | State and lifecycle management |
| Context API | Authentication state |
| LocalStorage | Persistent demo data |

---

## 📁 Project Structure

```text
Book-Vibe/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── data/
│       └── booksData.json
│
├── src/
│   ├── assets/
│   │   ├── book.ico
│   │   ├── hero_img.jpg
│   │   └── pngwing 1.png
│   │
│   ├── components/
│   │   ├── banner/
│   │   │   └── Banner.jsx
│   │   ├── book/
│   │   │   ├── bookCard/
│   │   │   │   └── BookCard.jsx
│   │   │   └── bookDetails/
│   │   │       └── BookDetails.jsx
│   │   ├── footerSection/
│   │   │   └── Footer.jsx
│   │   ├── navBar/
│   │   │   └── NavBar.jsx
│   │   └── userStatus/
│   │       ├── logIn/
│   │       │   └── Login.jsx
│   │       ├── signIn/
│   │       │   └── SignIn.jsx
│   │       └── singUp/
│   │           └── SignUp.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── errorPage/
│   │   │   └── ErrorPage.jsx
│   │   ├── homePage/
│   │   │   ├── Hero.jsx
│   │   │   └── HomePage.jsx
│   │   ├── listedBooks/
│   │   │   └── ListedBooks.jsx
│   │   └── pages-to-read/
│   │       └── PagesToRead.jsx
│   │
│   ├── route/
│   │   └── Route.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

# 📦 Book Data Structure

BookVibe currently uses a local JSON file:

```text
public/data/booksData.json
```

Each book is represented by an object like this:

```json
{
  "bookId": 1,
  "bookName": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
  "review": "The Great Gatsby is a timeless masterpiece...",
  "totalPages": 192,
  "rating": 4.5,
  "category": "Classic",
  "tags": ["Fiction", "Romance"],
  "publisher": "Scribner",
  "yearOfPublishing": 1925
}
```

### Data Fields

| Field | Description |
|---|---|
| `bookId` | Unique identifier |
| `bookName` | Book title |
| `author` | Author name |
| `image` | Book cover image URL |
| `review` | Book description/review |
| `totalPages` | Number of pages |
| `rating` | Book rating |
| `category` | Book category |
| `tags` | Related tags |
| `publisher` | Publisher |
| `yearOfPublishing` | Publication year |

---

# 🔄 Local JSON Data Fetching

The application loads book data from:

```text
public/data/booksData.json
```

Because the JSON file is inside the `public` directory, it can be requested from the browser using:

```js
fetch("/data/booksData.json")
```

Example:

```js
const bookPromise = fetch("/data/booksData.json")
  .then((response) => response.json());
```

### How it works

```text
booksData.json
      ↓
    fetch()
      ↓
 HTTP Response
      ↓
 response.json()
      ↓
 JavaScript Array
      ↓
   Component
```

The `fetch()` function returns a **Promise**.

The response is then converted into JavaScript data using:

```js
response.json()
```

The final result is an array containing all book objects.

---

# 🧠 Props & Data Passing

Props are one of the main React concepts used in BookVibe.

Props allow a parent component to send data to a child component.

For example:

```jsx
<BookCard book={book} />
```

Here:

```text
book={book}
```

means the `book` object is being passed to `BookCard` as a prop.

### Receiving Props

Inside `BookCard.jsx`:

```jsx
const BookCard = ({ book }) => {
  return (
    <div>
      <h2>{book.bookName}</h2>
      <p>{book.author}</p>
    </div>
  );
};
```

The child component receives the data through:

```jsx
{ book }
```

and can access individual properties:

```js
book.bookId
book.bookName
book.author
book.image
book.rating
book.totalPages
```

---

# 🔗 Complete Data Flow

The BookVibe data flow can be visualized as:

```text
booksData.json
      │
      ▼
    fetch()
      │
      ▼
 response.json()
      │
      ▼
 Array of books
      │
      ▼
   HomePage
      │
      │  book object
      ▼
<BookCard book={book} />
      │
      ▼
   BookCard
      │
      ├── book.bookName
      ├── book.author
      ├── book.image
      ├── book.rating
      ├── book.totalPages
      └── book.bookId
```

This makes `BookCard` reusable for every book.

---

# 🔍 Book Details Data Flow

When a user clicks a book card, the unique `bookId` is used to create a dynamic route.

Example:

```jsx
<Link to={`/book/${book.bookId}`}>
  View Details
</Link>
```

For book ID `1`, the URL becomes:

```text
/book/1
```

React Router matches:

```jsx
{
  path: "book/:bookId",
  element: <BookDetails />
}
```

Inside `BookDetails.jsx`, the ID can be accessed using:

```jsx
const { bookId } = useParams();
```

The complete flow is:

```text
BookCard
   ↓
book.bookId
   ↓
/book/1
   ↓
React Router
   ↓
BookDetails
   ↓
useParams()
   ↓
bookId = "1"
   ↓
Find matching book
   ↓
Display book details
```

---

# ⚛️ React Hooks

## `useState`

Used for component state.

```jsx
const [books, setBooks] = useState([]);
```

After fetching:

```jsx
setBooks(data);
```

The component re-renders with the updated data.

---

## `useEffect`

`useEffect` can be used when data fetching needs to happen after rendering:

```jsx
useEffect(() => {
  fetch("/data/booksData.json")
    .then((response) => response.json())
    .then((data) => {
      setBooks(data);
    });
}, []);
```

The empty dependency array:

```js
[]
```

causes the effect to run after the initial render.

---

## `use()`

React's `use()` API can consume a Promise.

Example:

```jsx
const bookData = use(bookPromise);
```

A parent component can create the Promise:

```jsx
const bookPromise = fetch("/data/booksData.json")
  .then((response) => response.json());
```

Then pass it to a child:

```jsx
<ListedBooks bookPromise={bookPromise} />
```

The child receives the Promise:

```jsx
const ListedBooks = ({ bookPromise }) => {
  const bookData = use(bookPromise);

  return (
    <div>
      {/* Render book data */}
    </div>
  );
};
```

---

# 🧭 Routing

BookVibe uses React Router with `createBrowserRouter()` and `RouterProvider`.

### Main Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/listed-books` | Listed Books |
| `/pages-to-read` | Pages To Read |
| `/book/:bookId` | Book Details |
| `/signin` | Sign In |
| `/signup` | Sign Up |
| Invalid route | Error Page |

---

# 🏠 Home Page

The Home Page includes:

- Hero section
- Book collection
- Reusable book cards
- Book cover images
- Book information
- Responsive layout

---

# 📚 Listed Books

The Listed Books page allows users to manage their reading list.

Users can:

- Add books
- Remove books
- Prevent duplicate entries
- View selected books
- Navigate to book details

---

# 📈 Pages To Read

The Pages To Read page provides a graphical representation of the user's reading collection.

The chart uses book information such as:

```js
totalPages
```

Example:

```text
Book A → 192 pages
Book B → 320 pages
Book C → 250 pages
```

When the reading list changes, the chart data updates accordingly.

---

# ❤️ Wishlist

Wishlist functionality works as a toggle:

```text
Not in Wishlist
      ↓
Add to Wishlist
      ↓
In Wishlist
      ↓
Click Again
      ↓
Remove from Wishlist
```

This allows users to add and remove books easily.

---

# 📖 Reading List Toggle

The reading list also supports adding and removing books:

```text
Add to Read
     ↓
Book Added
     ↓
Remove from Read
     ↓
Book Removed
```

This prevents users from being permanently locked into a reading selection.

---

# 🔐 Authentication

BookVibe includes a frontend authentication system for demonstration purposes.

Authentication is managed through:

```text
src/context/AuthContext.jsx
```

The context provides:

```js
user
login()
logout()
```

Components can access these values using:

```jsx
const { user, login, logout } = useAuth();
```

---

# 👤 Demo Login

Use the following demo account:

```text
Email: demo@bookvibe.com
Password: 123456
```

After login:

```text
Sign In / Sign Up
       ↓
    Logged In
       ↓
  Hi, Demo User
       ↓
     Logout
```

After logout:

```text
Logged Out
    ↓
Sign In / Sign Up
```

---

# 💾 LocalStorage

The demo authentication system uses browser `localStorage`.

Authentication state:

```text
bookVibeUser
```

Registered users:

```text
bookVibeUsers
```

This allows the login state to remain after refreshing the browser.

> ⚠️ This is a frontend demonstration only. Passwords should never be stored directly in localStorage in a production application.

For production authentication, use:

- Secure backend authentication
- Password hashing
- HTTP-only cookies
- Sessions or JWT
- Database storage
- Server-side validation

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Open the project

```bash
cd Book-Vibe
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start development server

```bash
npm run dev
```

The application will normally run at:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🔮 Future Improvements

The project can be extended into a full-stack application with:

### Backend

- Node.js
- Express.js
- REST API
- MongoDB
- Secure authentication

### Database

Replace:

```text
booksData.json
```

with a real database such as MongoDB.

### Authentication

Replace frontend-only authentication with:

- JWT
- HTTP-only cookies
- OAuth
- Firebase Authentication
- Secure password hashing

### Additional Features

- Search books
- Category filtering
- Sorting
- Pagination
- Dark mode
- User profiles
- Book reviews
- Rating system
- Admin dashboard
- Add/edit/delete books
- Real backend API
- Database integration

---

# 📌 Learning Objectives

This project demonstrates practical understanding of:

- React component architecture
- Props
- State management
- React Hooks
- Promise handling
- Local JSON data fetching
- Dynamic routing
- Route parameters
- React Router
- Context API
- LocalStorage
- Conditional rendering
- Reusable components
- Responsive UI
- Reading list management
- Wishlist management
- Data visualization
- Authentication concepts

---

# 👨‍💻 Developer

**Md. Shariful Islam**

Frontend Developer | React Developer | IoT & Robotics Engineering Student

### Technologies & Skills

```text
HTML
CSS
Tailwind CSS
JavaScript
React.js
React Router
Context API
REST API Concepts
LocalStorage
Responsive Web Design
Git & GitHub
Vite
```

---

# 📄 License

This project was created for educational and portfolio purposes.

---

<p align="center">
  Made with ❤️ using React.js
</p>
