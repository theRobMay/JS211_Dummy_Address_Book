let arrayOfUsers = [];


const getUser = () => {
    let myList = document.querySelector('ul');
    let myRequest = new Request('https://randomuser.me/api/')

    fetch(myRequest, {
        mode: "cors"})
        .then(res => res.json())
        // .then((address) =>
        //     arrayOfUsers = address)
        .then((json) => arrayOfUsers = json );
            console.log(arrayOfUsers.results)
            for (const listing of arrayOfUsers.results) {
                const listItem = document.createElement('li');
                listItem.appendChild(
                    document.createElement('strong')
                ).textContent = `${listing.name.first} ${listing.name.last} in ${listing.location.city},${listing.location.state} ${listing.location.postcode} ${listing.location.country}`;
                myList.appendChild(listItem);
            }

}


const consolePosts = () => {
    console.log(arrayOfUsers)
}