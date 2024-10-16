const elChangeInput = document.querySelector(".js-input");
const elChangeCountBox = document.querySelector(".js-count-box");

const handleRenderCountTitile = val => {
    let count_value_interval;
    if (val > 0) {
        const newElH_One = document.createElement("h1");
        newElH_One.textContent = val;
        count_value_interval = setInterval(() => {
            val -= 1;
            newElH_One.textContent = val;
            if(val < 1) newElH_One.remove();
        }, 1000);
        elChangeCountBox.append(newElH_One);
    } else clearInterval(count_value_interval);
}

elChangeInput.addEventListener("change", evt => {
    const change_value = evt.target.value.trim();
    if (isNaN(change_value) || !change_value) return alert("Invalid value");
    if (change_value < 0) return alert("value < 0");
    handleRenderCountTitile(change_value);
    evt.target.value = "";
})