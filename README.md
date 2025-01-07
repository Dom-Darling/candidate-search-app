# Candidate Search Page

This project is a candidate search application that allows users to view candidate details and manage their acceptance or rejection. The application displays candidate information including their avatar, name, username, location, email, GitHub profile, and company. Users can navigate through candidates and save their decisions using "+" and "-" buttons.

## Features

- Display candidate details
- Accept or reject candidates
- Save accepted candidates to localStorage
- Load the next candidate upon button clicks
- Handle "no more candidates" state with an appropriate message

## Project Structure

```
candidate-search-page
├── src
│   ├── components
│   │   ├── CandidateCard.tsx      # Displays individual candidate details
│   │   ├── CandidateList.tsx      # Manages the list of candidates
│   │   └── NoMoreCandidates.tsx    # Displays message when no more candidates are available
│   ├── hooks
│   │   └── useCandidates.ts        # Custom hook for managing candidate state
│   ├── pages
│   │   └── HomePage.tsx           # Main page of the application
│   ├── services
│   │   └── api.ts                  # API service for fetching candidates
│   ├── App.tsx                     # Main application component
│   ├── index.tsx                   # Entry point of the application
│   └── types
│       └── index.ts                # TypeScript interfaces and types
├── public
│   └── index.html                  # Main HTML template
├── package.json                    # npm configuration file
├── tsconfig.json                   # TypeScript configuration file
└── README.md                       # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd candidate-search-page
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## License

This project is licensed under the MIT License.