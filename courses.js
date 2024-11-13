// Sample course data
const courses = [
        {
            title: "JavaScript Basics",
            description: "An introductory course to JavaScript.",
            passed: 1200,
            review: "4.5/5",
            price: "$50",
            tags: ["Web Development", "JavaScript"]
        },
        {
            title: "Python for Data Science",
            description: "Learn Python programming for data analysis.",
            passed: 2000,
            review: "4.7/5",
            price: "$70",
            tags: ["Data Science", "Python"]
        },
        {
            title: "Advanced CSS and Sass",
            description: "Master the art of styling websites with advanced CSS and Sass.",
            passed: 800,
            review: "4.6/5",
            price: "$60",
            tags: ["Web Development", "CSS"]
        },
        {
            title: "HTML5 Essentials",
            description: "Understand the structure and elements of HTML5.",
            passed: 1500,
            review: "4.3/5",
            price: "$40",
            tags: ["Web Development", "HTML"]
        },
        {
            title: "React for Beginners",
            description: "Get started with React and build dynamic user interfaces.",
            passed: 1000,
            review: "4.8/5",
            price: "$75",
            tags: ["Web Development", "React"]
        },
        {
            title: "Data Visualization with D3.js",
            description: "Learn to create visual data representations with D3.js.",
            passed: 600,
            review: "4.5/5",
            price: "$80",
            tags: ["Data Science", "Data Visualization"]
        },
        {
            title: "SQL for Beginners",
            description: "Master the basics of SQL and database management.",
            passed: 2200,
            review: "4.7/5",
            price: "$65",
            tags: ["Data Science", "SQL"]
        },
        {
            title: "Machine Learning with Python",
            description: "Build machine learning models using Python libraries.",
            passed: 950,
            review: "4.6/5",
            price: "$85",
            tags: ["Data Science", "Python"]
        },
        {
            title: "Node.js for Backend Development",
            description: "Create server-side applications with Node.js.",
            passed: 700,
            review: "4.5/5",
            price: "$70",
            tags: ["Web Development", "Node.js"]
        },
        {
            title: "Introduction to Cybersecurity",
            description: "Learn the fundamentals of cybersecurity.",
            passed: 1100,
            review: "4.4/5",
            price: "$90",
            tags: ["Cybersecurity", "IT"]
        },
        {
            title: "AWS Cloud Practitioner",
            description: "Get started with AWS cloud services and infrastructure.",
            passed: 500,
            review: "4.6/5",
            price: "$100",
            tags: ["Cloud Computing", "AWS"]
        },
        {
            title: "Responsive Web Design",
            description: "Create websites that adapt to different screen sizes.",
            passed: 1300,
            review: "4.8/5",
            price: "$60",
            tags: ["Web Development", "CSS"]
        },
        {
            title: "Intro to Artificial Intelligence",
            description: "Understand the basics of AI and its applications.",
            passed: 650,
            review: "4.3/5",
            price: "$95",
            tags: ["AI", "Data Science"]
        },
        {
            title: "Vue.js Essentials",
            description: "Learn the basics of Vue.js for front-end development.",
            passed: 750,
            review: "4.6/5",
            price: "$65",
            tags: ["Web Development", "Vue.js"]
        },
        {
            title: "Blockchain Basics",
            description: "Discover the fundamentals of blockchain technology.",
            passed: 900,
            review: "4.5/5",
            price: "$80",
            tags: ["Blockchain", "IT"]
        },
        {
            title: "Excel for Data Analysis",
            description: "Learn to analyze data with Microsoft Excel.",
            passed: 1800,
            review: "4.7/5",
            price: "$55",
            tags: ["Data Science", "Excel"]
        },
        {
            title: "Kubernetes for DevOps",
            description: "Master container orchestration with Kubernetes.",
            passed: 300,
            review: "4.6/5",
            price: "$120",
            tags: ["DevOps", "Cloud Computing"]
        },
        {
            title: "Linux Command Line",
            description: "Become proficient with the Linux command line.",
            passed: 1300,
            review: "4.6/5",
            price: "$40",
            tags: ["IT", "Linux"]
        },
        {
            title: "Java Programming for Beginners",
            description: "Get started with Java programming.",
            passed: 1700,
            review: "4.5/5",
            price: "$50",
            tags: ["Programming", "Java"]
        },
        {
            title: "Ethical Hacking Basics",
            description: "Learn the basics of ethical hacking and penetration testing.",
            passed: 450,
            review: "4.4/5",
            price: "$95",
            tags: ["Cybersecurity", "IT"]
        },
        {
            title: "SEO Fundamentals",
            description: "Improve website visibility with SEO strategies.",
            passed: 600,
            review: "4.3/5",
            price: "$45",
            tags: ["Digital Marketing", "SEO"]
        },
        {
            title: "Flutter for Mobile Development",
            description: "Build cross-platform mobile apps with Flutter.",
            passed: 700,
            review: "4.6/5",
            price: "$85",
            tags: ["Mobile Development", "Flutter"]
        },
        {
            title: "TensorFlow for Deep Learning",
            description: "Create deep learning models with TensorFlow.",
            passed: 350,
            review: "4.7/5",
            price: "$100",
            tags: ["AI", "Machine Learning"]
        },
        {
            title: "Unity Game Development",
            description: "Learn the basics of game development with Unity.",
            passed: 500,
            review: "4.5/5",
            price: "$90",
            tags: ["Game Development", "Unity"]
        },
        {
            title: "Photoshop for Beginners",
            description: "Edit and enhance images with Photoshop.",
            passed: 1400,
            review: "4.6/5",
            price: "$50",
            tags: ["Graphic Design", "Photoshop"]
        },
        {
            title: "WordPress for Beginners",
            description: "Create and manage websites with WordPress.",
            passed: 1200,
            review: "4.5/5",
            price: "$60",
            tags: ["Web Development", "WordPress"]
        }
    ];
    
    // Function to display courses in HTML
    function displayCourses(coursesToDisplay) {
        const courseList = document.getElementById('courseList');
        courseList.innerHTML = ''; // Clear existing rows
    
        coursesToDisplay.forEach(course => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.title}</td>
                <td>${course.description}</td>
                <td>${course.passed}</td>
                <td>${course.review}</td>
                <td>${course.price}</td>
                <td>${course.tags.join(", ")}</td>
            `;
            courseList.appendChild(row);
        });
    
        // Save the filtered result in localStorage
        localStorage.setItem('filteredCourses', JSON.stringify(coursesToDisplay));
    }
    
    // Initial display of courses
    displayCourses(courses);
    
    // Filter courses by search input
    document.getElementById('filterInput').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredCourses = courses.filter(course => 
            course.title.toLowerCase().includes(query) ||
            course.description.toLowerCase().includes(query)
        );
        displayCourses(filteredCourses);
    });
    
    // Filter courses by tag
    document.getElementById('filterTag').addEventListener('change', function() {
        const selectedTag = this.value;
        const filteredCourses = selectedTag ? 
            courses.filter(course => course.tags.includes(selectedTag)) :
            courses;
        displayCourses(filteredCourses);
    });
    
;

// Populate table with courses
function displayCourses(coursesToDisplay) {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = ''; // Clear existing rows

    coursesToDisplay.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.title}</td>
            <td>${course.description}</td>
            <td>${course.passed}</td>
            <td>${course.review}</td>
            <td>${course.price}</td>
            <td>${course.tags.join(", ")}</td>
        `;
        courseList.appendChild(row);
    });

    // Save the filtered result in localStorage
    localStorage.setItem('filteredCourses', JSON.stringify(coursesToDisplay));
}

// Initial display of courses
displayCourses(courses);

// Filter courses by search input
document.getElementById('filterInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
    );
    displayCourses(filteredCourses);
});

// Filter courses by tag
document.getElementById('filterTag').addEventListener('change', function() {
    const selectedTag = this.value;
    const filteredCourses = selectedTag ? 
        courses.filter(course => course.tags.includes(selectedTag)) :
        courses;
    displayCourses(filteredCourses);
});
//Task #7
// Function to fetch books based on a search query
async function fetchBooks(query) {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await response.json();
        displayBooks(data.items);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Function to display books in the HTML
function displayBooks(books) {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = ''; // Clear any previous results

    if (!books || books.length === 0) {
        booksContainer.innerHTML = '<p>No books found for this course.</p>';
        return;
    }

    books.forEach(book => {
        const bookInfo = book.volumeInfo;
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item'); // Add class for styling

        bookItem.innerHTML = `
            <h3>${bookInfo.title}</h3>
            <p>Author: ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
            <p>Published: ${bookInfo.publishedDate || 'N/A'}</p>
            <p>Description: ${bookInfo.description ? bookInfo.description.substring(0, 100) + '...' : 'No description available'}</p>
            <a href="${bookInfo.previewLink}" target="_blank">View Book</a>
        `;
        booksContainer.appendChild(bookItem);
    });
}

// Example usage - fetch books related to a course topic
const courseTopic = 'JavaScript programming'; // Replace this with the actual course topic
fetchBooks(courseTopic);
