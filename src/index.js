window.onSwitchClicked = async (event) => {
    console.log('clicked');
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maker.ifttt.com/trigger/${event}/with/key/${key}`)
    console.log('response:', data);
}