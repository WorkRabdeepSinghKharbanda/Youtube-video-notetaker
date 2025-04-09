# YouTube Video Note Taker

YouTube Video Note Taker is a web application that allows users to take notes while watching YouTube videos. It provides features to add, edit, and delete notes associated with specific timestamps in a video.

## Features

- **Note Management**: Add, edit, and delete notes for specific YouTube videos.
- **Timestamped Notes**: Notes are linked to specific timestamps in the video for easy reference.
- **Local Storage**: Notes are saved in the browser's local storage, ensuring persistence across sessions.
- **Responsive Design**: The application is designed to work seamlessly across devices.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type-safe development.
- **SCSS**: For styling components.
- **Local Storage**: For storing notes data.

## Usage

1. Enter a YouTube video ID to load the video.
2. Use the note-taking interface to add notes at specific timestamps.
3. Edit or delete notes as needed.
4. Notes are automatically saved to local storage.

## Folder Structure

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   │   └── NotesDisplay/
│   └── organisms/
├── lib/
│   ├── hooks/
│   └── helpers/
├── styles/
└── App.tsx
```

- **components**: Contains reusable UI components.
- **lib**: Contains custom hooks and helper functions.
- **styles**: Contains global and component-specific styles.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need to take timestamped notes while watching educational YouTube videos.
- Built with ❤️ by Rabdeep singh kharbanda.
