import "./toggle.css";

class Toggle {
    constructor(buttonText, toggleText) {
        this.container = null;
        this.buttonText = buttonText;
        this.toggleText = toggleText;
    }

    render(parentNode) {
        const container = document.createElement("div");
        container.classList.add("toggle");

        const button = document.createElement("button");
        button.classList.add("toggle__button");
        button.textContent = this.buttonText;

        const text = document.createElement("p");
        text.classList.add("toggle__text");
        text.classList.add("toggle__text_hidden");
        text.textContent = this.toggleText;

        button.addEventListener("click", () => {
            text.classList.toggle("toggle__text_hidden");
        });

        container.append(button);
        container.append(text);
        parentNode.append(container);
        this.container = container;
    }
}

export default Toggle;