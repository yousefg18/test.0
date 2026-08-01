enum ImageCategory {
    Nature = "Nature",
    Portrait = "Portrait",
    Abstract = "Abstract"
}

type ImageSize = [number, number];

type GalleryImage = {
    readonly id: number;
    title: string;
    price: number;
    isAvailable: boolean;
    category: ImageCategory;
    size: ImageSize;
    tags: string[];
    description?: string;
};

type User = {
    readonly id: number;
    name: string;
    email: string;
};

function calculateTotalPrice(price: number, quantity: number): number {
    return price * quantity;
}

function formatImageId(id: number | string): string {
    return typeof id === "number"
        ? `IMG-${id}`
        : id.trim().toUpperCase();
}

const image: GalleryImage = {
    id: 101,
    title: "Sunset Beach",
    price: 120,
    isAvailable: true,
    category: ImageCategory.Nature,
    size: [1920, 1080],
    tags: ["sunset", "beach", "sea"],
    description: "Beautiful sunset view."
};

const user: User = {
    id: 1,
    name: "Yousef",
    email: "yousef@example.com"
};

console.log(formatImageId(image.id));
console.log(image.description ?? "No Description");
console.log(calculateTotalPrice(image.price, 2));
console.log(user.name);