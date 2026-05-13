<script>
    let name = "Thomas";
</script>

<header><h1>Welcome to {name}'s website</h1></header>
<div class="main">
    <p>My website is great</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gLKaIJ0bta0lPXTNbGYjBIl-JjDQZ6t5rQ&s" alt="heavy weapons guy">
</div>
<div id="body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<style>
    *, :global(body) {
        margin: 0;
        padding: 0;
    }

    #body {
        height: 100vh;
        background-color: blue;
        color: white;
    }

    h1, p, img {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-self: center;
        padding: 20px;
    }

    header {
        background-color: green;
    }

    .main {
        background-color: hotpink;
        padding: 5px;
    }
</style>