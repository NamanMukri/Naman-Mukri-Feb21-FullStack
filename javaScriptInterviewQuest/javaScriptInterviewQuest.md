# What is React Js?
    React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library.React divides the UI into multiple components, which makes the code easier to debug.

# How to run bootstrap ?
    Create an HTML page
    Load Bootstrap via CDN or host it locally
    Include jQuery
    Load Bootstrap JavaScript
    Put it all together

# What is AWS?
    Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions.AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery, etc., to help corporates scale and grow.


# How to fetch api?
    Computer systems like software communicate with each other and share information through a layer called an API.
    An API contains the set of rules and protocols guiding how two or more systems interact. For example, Facebook's system may interact with Google's system to get information on a user though an API.

    fetch('https://ubahthebuilder.tech/posts/1')
    .then(data => {
    return data.json();
    })
    .then(post => {
    console.log(post.title);
    });

    const update = {
    title: 'A blog post by Kingsley',
    body: 'Brilliant post on fetch API',
    userId: 1,
    };

    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    };

    fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
        }).then(update => {
        console.log(update);
        // {
        //
        title: 'A blog post by Kingsley',
        //
        body: 'Brilliant post on fetch API',
        //
        userId: 1,
        //
        id: 101
        // };
        }).catch(e => {
        console.log(e);
        });

# What is Hoisting?
    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
    console.log(hoist); // Output: undefined

    var hoist = 'The variable has been hoisted.';

# Set time out/Set interval

    setTimeout():

    It is a function that execute a JavaScript statement AFTER x interval.

    setTimeout(function () {
        something();
    }, 1000); // Execute something() 1 second later.
    setInterval():

    It is a function that execute a JavaScript statement EVERY x interval.

    setInterval(function () {
        somethingElse();
    }, 2000); // Execute somethingElse() every 2 seconds.
    The interval unit is in millisecond for both functions.
