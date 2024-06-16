
---

# NoteBuddy

NoteBuddy is a simple and intuitive web application for taking and managing notes. This app allows users to create, edit, and delete notes with rich text formatting features. NoteBuddy is built using HTML, CSS, and JavaScript, and it uses local storage to save notes on the user's device.

## Features

- Create new notes with titles and rich text content.
- Edit existing notes.
- Search for notes by title.
- Responsive design for mobile and desktop devices.

## Demo

![NoteBuddy Demo](demo.gif)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tobennaaustin/NoteBuddy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd notebuddy
   ```
3. Open `index.html` in your web browser to start the app.

## Usage

1. **Creating a Note**:
   - Fill in the title and content in the note form.
   - Use the toolbar to format the text (bold, underline, text alignment, text color, background color).
   - Click "Add Note" to save the note.

2. **Editing a Note**:
   - Click on a note title from the list of created notes.
   - The note form will open, displaying the selected note's content.
   - Edit the note as needed and click "Add Note" to save changes.

3. **Deleting a Note**:
   - (Optional: Implement a delete feature in the future).

4. **Searching for Notes**:
   - Use the search input above the notes list to filter notes by title.

## Project Structure

```
notebuddy/
│
├── index.html      # The main HTML file
├── styles.css      # The CSS file for styling
└── app.js          # The JavaScript file for functionality
```

## Code Overview

### HTML (`index.html`)

The main HTML file contains the structure of the app, including the note form and the list of notes.

### CSS (`styles.css`)

The CSS file contains styles for the app, ensuring a responsive and user-friendly interface.

### JavaScript (`app.js`)

The JavaScript file contains the logic for creating, editing, and displaying notes. It also includes functions for handling rich text formatting and local storage.

## Future Improvements

- Add a delete feature to remove notes.
- Implement user authentication for personalized note management.
- Sync notes across devices using a backend service.
- Enhance the UI/UX with more advanced styling and animations.

## Contributing

Feel free to fork this project and submit pull requests. Any contributions, whether they're bug fixes, feature additions, or documentation improvements, are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various note-taking applications.

---

Enjoy using NoteBuddy! If you have any questions or suggestions, please feel free to open an issue or contact the repository owner.

---

Y