# web-dev-final-frontend
Repository for frontend final project web dev. 

# EXTRA CREDIT: 
* Extra Credit of completing a project that is not the employee task is fulfilled.
* Extra Credit having at least one child component, within a parent component, within a parent component that you create.
 * Within the Search component, we have a BookCard component that is shown as search results, and within the BookCard component, there is the BookModel component that is displayed by clicking on a search result and a pop-up showing up.

# REQUIREMENTS FOR FRONTEND CHECKLIST: 
* UI (React)
  * Navbar/sidebar component: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Navbar/Navbar.js#L1-L68
  * 3 or more additional components (only listing three random because we have over 8 components):
    * https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Library/BookCard.js#L1-L45
    * https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/BookList/BookList.js#L9-L92
    * https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Thread/AddThread.js#L7-L89
  * 1 or more components components should display data representing a single instance from a model and Clicking on one of these components should show additional information related to that instance
    * https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/BookList/BookList.js#L9-L92
  * 1 or more components should display data based on store state
    * https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Search/BookCard.js#L13-L56
  * 1 or more components should take text-based user input
    * Text based user input component: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Thread/AddThread.js#L7-L89
  * Components should enable to user to perform CRUD operations on the backend models (listed snippets below are just a few examples and are not all instances of CRUD OPS)
    * For CREATE: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Search/BookModel.js#L6-L93
    * For READ: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/BookList/BookList.js#L9-L92
    * For UPDATE: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/pages/Edit/Edit.js#L6-L74
    * For DELETE (also includes EDIT): https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/pages/Conversation/Conversation.js#L11C1-L135
* Client-Side Routing (React Router)
  * Create 2 or more routes that display different componetns based on the URL that are accessible from the navbar/topbar
    * Route Creation: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/App.js#L11C1-L26
    * Navbar Accessiblity: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Navbar/Navbar.js#L18-L68
  * Use dynamic segments to display appropriate info based on the segment info (Examples contain additional embedded dynamic segments)
    * Navigate to dynamic segment: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/BookList/BookList.js#L21-L71
    * Rendered component when navigating to dynamic segment: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/pages/Conversation/Conversation.js#L11-L135
* Stae Management (Redux)
  * Create a store and a reducer to handle incoming actions:
    * Store and reducer: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/store.js#L1-L6
  * Create 1 or more action creators to create actions based on input:
    * Action Creator: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/indexSlice.js#L3-L13
  * Update store using dispatch and actions
    * Update store: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Search/BookCard.js#L13-L45
  * Reflect updates to the state in the frontend UI:
    * Reflected updates show the card: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Search/BookModel.js#L6-L40
* API CALLS:
  * Backend: Using backend routes, should be able to perform CRUD on database models ( The following examples are not the only examples in code.)
    * CREATE: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Search/BookModel.js#L8-L40
    * READ: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/BookList/BookList.js#L9-L29
    * UPDATE: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/pages/Edit/Edit.js#L6-L74
    * DELETE: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/pages/Conversation/Conversation.js#L32-L60
  * External: Should make 2 or more External API Calls
    * External API Calls: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Search/SearchLibrary.js#L6-L50
    * External API Calls: https://github.com/JoshuaRamc/web-dev-final-frontend/blob/4e7664aeacc07d54238a286ee33a76167ac0b317/book-lib/src/components/Search/BookModel.js#L6-L80
