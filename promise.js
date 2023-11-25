const posts = [];
let lastActivityTime = null;

// Function to create a post asynchronously
async function createPost(post) {
    // Return a promise that resolves after 1 second
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Add the post to the array
            posts.push(post);
            // Resolve the promise to signal completion
            resolve();
        }, 1000);
    });
}

// Function to update the last user activity time asynchronously
async function updateLastUserActivityTime() {
    // Return a promise that resolves after 1 second
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Update the last activity time
            lastActivityTime = new Date();
            // Resolve the promise to signal completion
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Function to delete a post asynchronously
async function deletePost() {
    // Return a promise that resolves after 1 second
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Check if there are posts to delete
            if (posts.length > 0) {
                // Remove the last post from the array
                const deletedPost = posts.pop();
                // Resolve the promise with the deleted post
                resolve(deletedPost);
            } else {
                // Reject the promise with an error if no posts are available
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

// Function to get cold drinks asynchronously
async function getColdDrinks() {
    // Return a promise that resolves after 2 seconds
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Resolve the promise to signal completion
            resolve("Got cold drinks");
        }, 2000);
    });
}

// Main function to execute the operations sequentially using async/await
async function main() {
    try {
        // Create a post and wait for it to complete
        await createPost({ title: "Post One", body: "This is Post One" });

        // Update the last user activity time and wait for it to complete
        await updateLastUserActivityTime();

        // Log all posts and last activity time
        console.log("All Posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);

        // Delete a post and wait for it to complete
        await deletePost();

        // Log the remaining posts
        console.log("Remaining Posts:", posts);

        // Husband gets butter
        console.log("Husband gets butter");

        // Get cold drinks after getting butter and wait for it to complete
        await getColdDrinks();

        // Log the completion message
        console.log("Celebration complete!");
    } catch (error) {
        // Handle any errors that occurred during the asynchronous operations
        console.error("Error:", error);
    }
}

// Call the main function to start the sequential execution
main();
