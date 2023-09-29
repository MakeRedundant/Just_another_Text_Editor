import { openDB } from "idb";

const initdb = async () =>
  //Create new database called 'jate'
  openDB("jate", 1, {
    // Add database to schema if not already installed
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      //Create a new object store and give key name 'id" and auto increment
      db.createObjectStore("jate", {
        keyPath: "id",
        autoIncrement: true,
      });
      console.log("jate database created");
    },
  });

// TODO: Add logic for a method that updates the content from the database
export const putDb = async (content) => {
  console.log("PUT request to update the database!");

  // Create connection to db
  const jateDB = await openDB("jate", 1);

  // Create a new read-write transaction on the 'jate' object store
  const tx = jateDB.transaction("jate", "readwrite");

  // Open the 'jate' object store within the transaction
  const store = tx.objectStore("jate");

  // Use the put method to update data with an ID of 1 and the provided content
  const request = store.put({ id: 1, content: content });

  // Wait for the put request to complete
  const result = await request;

  // Log a confirmation message with the result of the operation
  console.log("Data saved to the database", result);
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { 
  console.log('GET request to the database!');

  // Open the 'jate' database with version 1.
  const jateDb = await openDB('jate', 1);

  // Create a read-only transaction on the 'jate' object store.
  const tx = jateDb.transaction('jate', 'readonly');

  // Access the 'jate' object store within the transaction.
  const store = tx.objectStore('jate');

  // Get the content with an ID of 1 from the database.
  const request = store.get(1);

  // Wait for the get request to complete.
  const result = await request;

  // Log the retrieved result.
  console.log('result.value', result);

  // Return the retrieved content, if available.
  return result?.value;
};

initdb();


//!!!!!Not using this code just for reference POST request
// !! Code came from mini project

// // Export a function we will use to POST to the database.
// export const postDb = async (name, home, cell, email)  => {
//   console.log('Post to the database');

//   // Create a connection to the database database and version we want to use.
//   const contactDb = await openDB('contact', 1);

//   // Create a new transaction and specify the database and data privileges.
//   const tx = contactDb.transaction('contact', 'readwrite');

//   // Open up the desired object store.
//   const store = tx.objectStore('contact');

//   // Use the .add() method on the store and pass in the content.
//   const request = store.add({ name: name, home_phone: home, cell_phone: cell, email: email });

//   // Get confirmation of the request.
//   const result = await request;
//   console.log('Data saved to the database', result);
// };

//!!!!!! Not using this code just for reference DELETE request

// // Export a function we will use to DELETE to the database.
// export const deleteDb = async (id) => {
//   console.log('DELETE from the database', id);

//   // Create a connection to the database database and version we want to use.
//   const contactDb = await openDB('contact', 1);

//   // Create a new transaction and specify the database and data privileges.
//   const tx = contactDb.transaction('contact', 'readwrite');

//   // Open up the desired object store.
//   const store = tx.objectStore('contact');

//   // Use the .delete() method to get all data in the database.
//   const request = store.delete(id);

//   // Get confirmation of the request.
//   const result = await request;
//   console.log('result.value', result);
//   return result?.value;
// };
