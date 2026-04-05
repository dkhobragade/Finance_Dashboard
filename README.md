# Finance Dashboard

A modern, responsive finance dashboard web application built with React and TypeScript. This application provides users with comprehensive financial management tools including transaction tracking, role-based access control, and a sleek dark mode interface.

## Features

- **User Authentication**: Basic login system with admin and normal user roles
- **Role-Based Access Control**: Admin users can access the payment page, while normal users are restricted
- **Send Money Functionality**: Secure money transfer capabilities
- **Dynamic Transaction Management**: Add and store transactions in global state
- **Transaction Filtering**: Filter transactions by all, income, or expense categories
- **Dashboard Overview**: Display recent transactions and financial summaries
- **Dark Mode Support**: Added a persistent light/dark theme toggle across the app
- **Responsive Improvements**: Adjusted layout and component behavior for smaller screen sizes

## Tech Stack

- **Frontend Framework**: React 19.2.4 with TypeScript
- **UI Library**: Mantine 9.0.0 (with Charts and Hooks)
- **State Management**: Zustand 5.0.12 with persist middleware
- **Build Tool**: Vite 8.0.1
- **Styling**: PostCSS with Mantine presets
- **Icons**: FontAwesome React
- **Charts**: Recharts 3.8.1
- **Linting**: ESLint with TypeScript support

## Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dkhobragade/Finance_Dashboard.git
   cd finance-dashboard/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Login**: Use the login page to authenticate
   - **Admin Login**: Use email `admin@gmail.com` with any password
   - **Normal User Login**: Use any email address, password must not be blank (no other validation)
2. **Dashboard**: View recent transactions and financial overview on the main dashboard
3. **Transactions**: Add new transactions and filter by type (all, income, expense)
4. **Send Money**: Use the send money functionality for transfers
5. **Payment Page**: Admin users can access additional payment features
6. **Settings**: Toggle between dark and light modes (preference is persisted)

## Folder Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # React components
│   │   ├── creditScore.tsx
│   │   ├── header.tsx
│   │   ├── homePage.tsx
│   │   ├── incomeExpense.tsx
│   │   ├── layout.tsx
│   │   ├── loginPage.tsx
│   │   ├── paymentPage.tsx
│   │   ├── renderComp.tsx
│   │   ├── sidebar.tsx
│   │   ├── startBox.tsx
│   │   ├── transaction.tsx
│   │   └── transactionPage.tsx
│   ├── data/              # Static data files
│   │   └── data.ts
│   ├── helper/            # Utility functions
│   │   └── helper.ts
│   └── store/             # Zustand state management
│       └── useStore.ts
├── eslint.config.js       # ESLint configuration
├── package.json           # Dependencies and scripts
├── postcss.config.cjs     # PostCSS configuration
├── tsconfig*.json         # TypeScript configurations
├── vite.config.ts         # Vite configuration
└── index.html             # Main HTML file
```



## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

