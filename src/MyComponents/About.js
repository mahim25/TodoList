import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        Welcome to my <strong>Todo List</strong> app! This simple yet powerful
        tool helps you stay organized and keep track of your tasks.
      </p>

      <h2>Features:</h2>
      <ul>
        <li>
          <strong>Add Tasks:</strong> You can easily add new tasks to your list
          by providing a title and description.
        </li>
        <li>
          <strong>Delete Tasks:</strong> When you’re done with a task, simply
          click the delete button to remove it from your list.
        </li>
        <li>
          <strong>Persistent Data:</strong> Your tasks are stored in your
          browser's local storage, ensuring that your list persists even if you
          refresh the page or return to the app later.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> The app provides a clean,
          easy-to-use interface that helps you manage your tasks with just a few
          clicks.
        </li>
      </ul>

      <h2>How to Use:</h2>
      <ol>
        <li>
          <strong>Adding a Task:</strong> To add a new task, simply type the
          title and description in the provided fields and click "Add Todo."
        </li>
        <li>
          <strong>Viewing Your Tasks:</strong> All your tasks will appear in the
          list, displaying the title and description.
        </li>
        <li>
          <strong>Deleting a Task:</strong> If you've completed a task or no
          longer need it, click the delete button next to the task to remove it
          from your list.
        </li>
        <li>
          <strong>Persistence:</strong> Your tasks are automatically saved, so
          you can come back anytime and find them just the way you left off.
        </li>
      </ol>

      <h2>About the Developer:</h2>
      <p>
        This app was created by a passionate and dedicated developer who loves
        building simple, intuitive, and useful applications. With a strong focus
        on delivering a smooth user experience, the goal is to make daily task
        management easier for everyone.
      </p>
      <p>
        Whether you're managing work, school assignments, or just keeping track
        of daily tasks, this Todo List app is a perfect solution to stay
        organized and productive.
      </p>
    </div>
  );
};