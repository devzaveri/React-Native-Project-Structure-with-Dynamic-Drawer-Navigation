# React-Native-Project-Structure-with-Dynamic-Drawer-Navigation
This repository showcases a well-structured React Native project with a highly customizable dynamic drawer navigation component. The project setup includes responsiveness for various devices, following best practices to ensure scalability and maintainability. Ideal for developers looking to streamline their setup and enhance app functionality.

<H1>Creating a well-structured React Native project</H1> can significantly streamline the development process and enhance the scalability of your application. In this blog, I will walk you through a dynamic drawer navigation component, integrated with a comprehensive project structure designed to make your app more maintainable and efficient. This setup includes a <H1>responsive layout</H1> to ensure your app looks great on all devices, utilizing the latest libraries and best practices in React Native development.
This blog and the accompanying GitHub repository aim to provide developers with a robust foundation for building React Native applications. Whether you're a seasoned developer or just starting, this guide will help you quickly set up a scalable and maintainable project, complete with a customizable drawer navigation component. The dynamic drawer navigation will allow you to effortlessly manage your app's screens, customize appearance, and handle user interactions such as logging out, making your development process smoother and more efficient. </br></br></br>

<img src="https://github.com/devzaveri/React-Native-Project-Structure-with-Dynamic-Drawer-Navigation/assets/84063889/40316e65-b62e-4943-ada9-2855f34fdd4a" width="20%" height="10%"> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/devzaveri/React-Native-Project-Structure-with-Dynamic-Drawer-Navigation/assets/84063889/b37402fd-8e0d-4edd-bd45-7fe63ba23248" width="20%" height="10%"> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/devzaveri/React-Native-Project-Structure-with-Dynamic-Drawer-Navigation/assets/84063889/3075a66b-8633-410a-8f41-3dc1425191ab" width="20%" height="10%"> &nbsp; &nbsp; &nbsp;
<img src="https://github.com/devzaveri/React-Native-Project-Structure-with-Dynamic-Drawer-Navigation/assets/84063889/1671449c-8eb8-4572-b0d8-76aa30675e69" width="20%" height="10%"> &nbsp; &nbsp; &nbsp;






Dynamic Drawer Component
<H2>The dynamic drawer component</H2> is designed to be highly customizable and easy to integrate into your React Native project. Below is a breakdown of its key functionalities and required properties:

```javascript
<View style={{flex: 1}}>
    <DrawerNavigation
        headerShown={true}
        headerViewOfDrawer={DrawerHeader}
        screens={categories}
        drawerBackgroundColor={Colors.pink}
        drawerActiveBackgroundColor={Colors.red}
        drawerActiveTextColor={Colors.white}
        drawerInactiveTextColor={Colors.black}
        onLogoutPress={() => {
            console.log('LOGOUT');
        }}
        isLogout
        DrawerLableFontsSize={18}
    />
</View>
```

1: Required Fields:

headerShown={true/false}: Toggle to show or hide the drawer header, where you can add a logo or app name.
headerViewOfDrawer={}: If headerShown={true}, this field is required to call a header function to create a custom drawer header.


2: Screens Property:

screens={categories}: Use this to add screens to your drawer. You can dynamically add drawer screens through an array of categories.


3: Customization Properties:

drawerBackgroundColor={Colors.pink}: Set the background color of the drawer.
drawerActiveBackgroundColor={Colors.red}: Set the active field background color.
drawerActiveTextColor={Colors.white}: Set the active field text color.
drawerInactiveTextColor={Colors.black}: Set the inactive field text color.
DrawerLableFontsSize={18}: Change the drawer label font size.


4: Logout Functionality:

Adding isLogout will show a logout button.
onLogoutPress={() => { console.log('LOGOUT'); }}: This arrow function allows you to define functionality upon pressing the logout button.


5: Disable Drawer Swipe:

DrawerDisableForScreen={['Profile', 'Notification']}: Disable drawer swipe functionality for specific screens by adding their names to this array.


Project Structure
<H2>The project is organized into the following structure</H2> to ensure clarity and maintainability:

<img src="https://github.com/devzaveri/React-Native-Project-Structure-with-Dynamic-Drawer-Navigation/assets/84063889/3e98577c-f8ac-4a13-8d6b-a817a6899e71" width="40%" height="20%"> &nbsp; &nbsp; &nbsp;



-> assets: Store images, fonts, and other static resources.</br>
-> components: Reusable components used throughout the app.</br>
-> config: Configuration files and environment settings.</br>
-> constants: Constants and action types used in the application.</br>
-> helpers: Utility functions and helper methods.</br>
-> locales: Localization files for multi-language support. </br>
-> redux: Redux actions, reducers, and store configuration.</br>
-> routes: Navigation and routing configurations.</br>
-> screens: All screen components and related logic.</br>

Responsiveness
<H2>Ensuring your application is responsive</H2> across all devices is crucial. For this project, I've integrated the <a href="https://www.npmjs.com/package/react-native-full-responsive">react-native-full-responsive</a> library to handle responsiveness effectively. This library simplifies the process of making your app adaptable to different screen sizes and orientations.

Conclusion
<H2>This blog and the accompanying GitHub repository</H2> provide a comprehensive setup for React Native development, featuring a dynamic drawer navigation component and a well-organized project structure. By following this guide, you can kickstart your project with a scalable and maintainable architecture, ensuring a smoother and more efficient development process. This resource is invaluable for developers looking to streamline their project setup and enhance their app's functionality.
