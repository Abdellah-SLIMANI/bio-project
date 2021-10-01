
export const preventDefaultBehavior = (event) => {
    event.preventDefault();
    event.returnValue = false;
    event.cancelBubble = true;
}