export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export const getContactInfo = (): Promise<ContactInfo> => {
  return new Promise<ContactInfo>((resolve) => {
    setTimeout(() => {
      resolve({
        name: "The Plushy Place",
        email: "email",
        phone: Math.random().toString(),
      });
    }, 1);
  });
};

export const products: Product[] = [
  {
    id: 1,
    name: "Cuddly Bear",
    description: "A soft and cuddly teddy bear.",
    price: 19.99,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQl20baCsTFgvAwDYwKH9PIhoO7ZTQtksc4z_MJ67BDGLudtsENnxhWZwn2HVDS_j6KV3kXQpFgWe6q024zgzqAebsm59A2movLk5CZUXc",
  },
  {
    id: 2,
    name: "Fluffy Bunny",
    description: "A cute and fluffy bunny plush toy.",
    price: 14.99,
    imageUrl:
      "https://www.rafa-kids.com/wp-content/uploads/2020/11/Jellycat-collection-Bashful-Beige-Bunny-Rafa-kids-.jpg",
  },
  {
    id: 3,
    name: "Sleepy Panda",
    description: "A cozy panda plush perfect for bedtime.",
    price: 24.99,
    imageUrl: "https://example.com/images/sleepy-panda.jpg",
  },
  {
    id: 4,
    name: "Happy Elephant",
    description: "A cheerful elephant plush with big ears.",
    price: 29.99,
    imageUrl: "https://example.com/images/happy-elephant.jpg",
  },
  {
    id: 5,
    name: "Tiny Fox",
    description: "A small and adorable fox plush toy.",
    price: 12.99,
    imageUrl: "https://example.com/images/tiny-fox.jpg",
  },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2);
  });
};

export const addProduct = (product: Product): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      products.push(product);
      resolve();
    }, 1);
  });
};

export const findProductById = (id: number): Promise<Product | undefined> => {
    return new Promise<Product | undefined>((resolve) => {
        setTimeout(() => {
            const product = products.find((product) => product.id === id);
            resolve(product);
        }, 1);
    });
};