## ID_STUDENT: 11004310
 #  explaining my design choices
   The header design for the "Open Fashion" app includes an elegant title image that showcases the app’s name, 
   providing a sleek and branded look that aligns with the style seen in the reference image. 
   Additionally, the header features a convenient search icon, making the search functionality easily accessible.
   In the product list section, each product is presented in a card format that includes an image,
   title, subtitle, and price, creating a clear and visually appealing layout for users to browse through. 
   Each product card is also equipped with a remove icon—this intuitive feature allows users to effortlessly remove items from their cart, 
   following common e-commerce design conventions.
 # how i implemented data storage
   The implementation of data storage and state management for the cart in the "Open Fashion" app leverages the useState hook to handle the cart state, 
   maintaining an array of products currently in the cart.
  To ensure the cart state is preserved across app sessions, AsyncStorage is integrated for persistent storage. 
  When the component mounts, AsyncStorage loads any existing cart data, ensuring continuity for the user. 
  Additionally, whenever items are added or removed from the cart,
  the updated cart state is saved back to AsyncStorage, 
  ensuring consistent and reliable data persistence even when the app is closed and reopened.
  # screenshots of the app
  ![image](https://github.com/Ihongui/rn-assignment6-11004310/assets/150761912/20452b73-e2ce-4dc1-bb11-50503226a3b6)
  ![image](https://github.com/Ihongui/rn-assignment6-11004310/assets/150761912/d38c88de-1a8e-47d2-a190-6530ada6b0a4)
  ![image](https://github.com/Ihongui/rn-assignment6-11004310/assets/150761912/f9520bf5-3761-4fe8-836d-6dff206210ce)
  ![image](https://github.com/Ihongui/rn-assignment6-11004310/assets/150761912/ac8bee81-04f3-4f93-9be2-0ef5b60d3c5f)
  ![image](https://github.com/Ihongui/rn-assignment6-11004310/assets/150761912/da09b3b7-26b4-49bd-9320-45100d1c8cee)
  ![image](https://github.com/Ihongui/rn-assignment6-11004310/assets/150761912/a6b0e58d-6d61-4c00-8749-7e35017c1f91)
