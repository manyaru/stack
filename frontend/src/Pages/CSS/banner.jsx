/* Banner Section Styling */
.banner {
    width: 100%;
    height: 300px; /* Reduced height */
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: brightness(80%); /* Darkens the image for text visibility */
}

.banner-content {
    position: absolute;
    text-align: center;
    z-index: 1;
}

.banner h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.banner p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.banner button {
    padding: 10px 20px;
    font-size: 1.1rem;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.banner button:hover {
    background-color: #ff3b3b;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .banner {
        height: 200px; /* Further reduced height on mobile */
    }

    .banner h1 {
        font-size: 2rem;
    }

    .banner p {
        font-size: 1rem;
    }

    .banner button {
        font-size: 1rem;
        padding: 8px 16px;
    }
}
