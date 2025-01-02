import React from "react";
import styles from "./styles.module.scss";
import { FaStar } from "react-icons/fa6";
import Image from 'next/image';
export default function Review() {
  const reviews = [
    {
      id: 1,
      Image: "https://bebran.com/public/uploads/1698746164_be-bran-reviewImage1.webp",
      icon: "https://bebran.com/public/uploads/1698746164_be-bran-reviewImage1.webp",
      name: "Lisa Mc Cornner",
      rating: 4,
      text: "I was very impressed with the digital marketing services from BeBran. They understood my business needs and developed a customized strategy tailored to my goals. I am pleased with the results I have achieved so far.",
    },
    {
      id: 2,
      Image: "https://bebran.com/public/uploads/1698746164_be-bran-reviewImage2.webp",
      icon: "https://bebran.com/public/uploads/1698746164_be-bran-reviewImage2.webp",
      name: "John Doe",
      rating: 5,
      text: "BeBran exceeded my expectations with their exceptional customer service and expertise. They helped me grow my online presence and attract more clients. Highly recommended!",
    },
    {
      id: 3,
      Image: "https://bebran.com/public/uploads/1698746164_be-bran-reviewImage3.webp",
      icon: "https://bebran.com/public/uploads/1698746164_be-bran-reviewImage3.webp",
      name: "Emily Smith",
      rating: 4,
      text: "Their team is professional and knowledgeable. They guided me through every step of my marketing campaign, ensuring I understood the process. The results have been fantastic!",
    },
    {
      id: 4,
      Image: "https://via.placeholder.com/290x234",
      icon: "https://via.placeholder.com/82x82",
      name: "Michael Brown",
      rating: 5,
      text: "Working with BeBran was a game changer for my business. Their innovative approach and dedication to quality are unmatched. My sales have significantly increased.",
    },
  ];

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className={`${styles.review_box} ${styles.card}`}>
          <div className={styles.card_Image}>
            <Image
              src={review.Image || "https://via.placeholder.com/290x234"}
              alt={`${review.name}'s Review`}
              width="290"
              height="234"
            />
          </div>
          <div className={styles.card_body}>
            <div className={styles.card_icon}>
              <Image
                src={review.icon || "https://via.placeholder.com/82x82"}
                alt={`${review.name}'s Icon`}
                width="82"
                height="82"
              />
            </div>
            <h3 className={styles.hF}>{review.name}</h3>
            <ul>
              {[...Array(review.rating)].map((_, i) => (
                <li key={i}>
                  <FaStar />
                </li>
              ))}
            </ul>
            <p>{review.text}</p>
            <div className={`text-center ${styles.rfacebook}`}>
              <Image
                src="https://bebran.com/public/uploads/1698746164_google.webp"
                alt="Google"
                width="162"
                height="70"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
