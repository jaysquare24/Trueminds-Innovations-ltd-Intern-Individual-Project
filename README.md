# Chuks Kitchen — Food Ordering & Customer Management System UI

## Project Overview

**Chuks Kitchen** is a modern, responsive Food Ordering and Customer Management System UI built to simulate a real-world restaurant ordering experience. The application focuses on clean user experience, scalable architecture, and industry-standard frontend practices.

This project was developed as part of a structured internship sprint to demonstrate proficiency in modern frontend development using React and Vite.


## Project Goals
- Convert Figma UI screen into functional webpage
- Build a real-world restaurant ordering interface  
- Maintain clean, readable, and well structured code  
- Implement global state management for cart functionality
- Device responsiveness  
- Apply Agile sprint workflow  
- Proper documentation for other developers 

---

## Key Features

### Core Features

- Responsive modern UI  
- Food listing and detail view  
- Add to cart functionality  
- Cart global state management  
- Dynamic quantity updates  
- Modal interactions  
- Scroll management  
- Route-based navigation   

### Advanced UI Behaviors

- Sticky header behavior  
- Smooth scroll-to-top  
- Conditional layout rendering  
- Modal body scroll locking  
- default protein detection  
- Animated UI elements (using framer-motion) 

---

##  Tech Stack

### Frontend

- React  
- Vite  
- JavaScript (ES6+)  
- CSS3 
- React Router  

### State Management

- Global state (Context API / custom logic)   

### Development Tools

- Git & GitHub  
- VS Code  
- Chrome DevTools  
- Netlify

---

## Project Structure

The project structure was intentionally organized to promote scalability, maintainability, and clear separation of concerns in line with modern React best practices.

- **`pages/`** contains route-level screen components that map directly to application views. These act as high-level containers responsible for composing features and managing page flow.

- **`components/`** houses reusable UI building blocks. This separation ensures that shared elements such as the header, footer, modal, and grids remain decoupled from specific routes and can be reused across multiple pages.

- **`components/layout/`** contains structural wrappers (e.g., `Layout.jsx`) responsible for consistent page chrome such as headers and footers. Treating layout as a specialized component improves composability and keeps routing logic clean.

- **`context/`** centralizes global state management for the cart using the Context API and reducer pattern, providing predictable state updates while keeping the app lightweight.

- **`data/`** stores mock data sources used to simulate real backend responses during UI development.

- **`styles/`** contains global styling to maintain visual consistency across the application.

- **`utilities/`** is reserved for reusable helper functions to prevent logic duplication as the application grows.

This structure mirrors patterns used in production React applications and was chosen to ensure that future developers can easily navigate, extend, and maintain the codebase.

src/
┣ assets/
┣ components/
┃ ┣ common/
┃ ┃  ┣ modal/
┃ ┃  ┃   ┣ children/
┃ ┃  ┃   ┃   ┗ FoodDetailsAndOptions.jsx
┃ ┃  ┃   ┗ Modal.jsx
┃ ┃  ┣ FoodGrid.jsx
┃ ┃  ┣ Footer.jsx
┃ ┃  ┣ Header.jsx
┃ ┃  ┣ Hero.jsx
┃ ┃  ┗ ScrollToTop.jsx
┃ ┗ layout/ 
┃     ┗  Layout.jsx
┣ pages/
┃ ┣ home/
┃ ┃  ┣ sections/
┃ ┃  ┃  ┣ ChefSpecial.jsx
┃ ┃  ┃  ┣ PopularCategories.jsx
┃ ┃  ┃  ┗ SearchedFoods.jsx
┃ ┃  ┗ HomePage.jsx
┃ ┣  order/
┃ ┃   ┣ sections/
┃ ┃   ┃   ┣ Cart.jsx
┃ ┃   ┃   ┗  OrderSummary.jsx
┃ ┃   ┗ OrderPage.jsx
┃ ┣ CreateAccountLandingPage.jsx
┃ ┣ ExplorePage.jsx
┃ ┣ GeneralLandingPage.jsx
┃ ┗ LoginLandingPage.jsx
┣ context/
┃  ┣ CartContext.jsx
┃  ┗ cartReducer.js
┣ data/
┃  ┣ chefSpecial.js
┃  ┣ meals.js
┃  ┣ menuCategories.js
┃  ┗ popularCategories.js
┣ style/
┃  ┗ global.css
┣ App.jsx
┣ main.jsx
┗ utilities/

---

##  Live Link

https://chuksmeal.netlify.app/

---

##  Installation & Setup

### 1️ Clone the repository
```bash
git clone https://github.com/jaysquare24/Trueminds-Innovations-ltd-Intern-Individual-Project
cd Trueminds-Innovations-ltd-Intern-Individual-Project

```

----

### 2 Install Dependencies

- npm install

### 3 Start Development 

- npm run dev
- App will run on  http://localhost:5173

---

## Design Interpretation

### View Option Button

The Figma design did not explicitly define a navigation flow between the food item card and the food details/extra options modal. To create a clear and intuitive user experience, the **Add to Cart** button on the item card was adapted to function as a **View Options** button.

This allows users to first review and customize their food selection inside the modal before adding it to the cart. A **Confirm to Cart** button was then introduced within the modal to complete the action.

### Cart and Order Summary

The design presents the cart and order summary on separate screens but both are associated with the **My Order** navigation. To improve usability and reduce unnecessary navigation steps, both sections were consolidated into a single **My Order** page.

This approach maintains logical grouping while providing users with a more efficient checkout experience.

---

## State Management Decision

The cart currently uses global state via Context/custom logic instead of Redux Toolkit to:

- Reduce initial complexity 
- Over Engineering 
- Maintain lightweight state for a medium-scale app  
- Demonstrate understanding of core React state patterns  

### Future Upgrade

Planned migration to Redux Toolkit `createSlice` for:

- Better scalability  
- DevTools integration  
- Cleaner action handling  
- Improved maintainability  

---

## Agile Sprint Workflow

This project was built using an Agile sprint approach:

- **Sprint 1:** Project setup with layout and routing structure, and landing pages contents  
- **Sprint 2:** Home, Explore, Order pages and Cart reducer  
- **Sprint 3:** Responsiveness and search bar  
- **Sprint 4:** Animations, scroll-to-top-component and UI polish  
- **Sprint 5:** Testing and Documentation  

---

## Challenges Faced

- Managing modal scroll behavior  
- Handling conditional layout rendering  
- Maintaining consistent flex gaps across browsers  
- Preventing undefined errors in dynamic data  
- Structuring scalable component architecture  

---

## Solutions Implemented

- Body scroll lock with `modal-open` class  
- Optional chaining for safe data access  
- Layout route guards  
- Defensive programming patterns  
- Component modularization  

---

## Performance Considerations

- Vite for faster builds   
- Optimized asset usage  
- Clean component re-renders  

---

## Known Limitations

- No backend integration (UI only)  
- No persistent cart storage  
- No authentication system yet  

---

## Future Enhancements

- Redux Toolkit migration  
- Backend/API integration  
- User authentication  
- Payment gateway integration  
- Order history  
- Admin dashboard  
- Unit and integration tests    

---

## Author

**Jamiu Olajide**  
Frontend Developer Intern  

- GitHub: https://github.com/jaysquare24  
- LinkedIn: https://www.linkedin.com/in/jamiu-olajide-795444185
- Portfolio: https://jamiuolajide.netlify.app/ 

---

## Acknowledgements

- Trueminds Innovations Limited  
- Icons8 website  
- Tinypng website

---

## License

This project is for educational and portfolio purposes.
