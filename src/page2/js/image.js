


class Image {
    constructor(src) {
        this.src = src;
        this.container = null;
    }

    render(parentNode) {
        const container = document.createElement("div");
        container.classList.add("image");

        const image = document.createElement("img");
        image.classList.add("image__img");
        image.src = this.src;

        container.append(image);
        parentNode.append(container);
        this.container = container;
    }
}

export default Image;