import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";
import { Header } from "./components/Header";
import { useState } from "react";
import { NewFeedbackModal } from "./components/NewFeedbackModal";

interface Post {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string
  };
  content: {
    title: string;
    description: string;
  };
  type: string;
  publishedAt: Date
}

export function App() {
  const [isNewFeedbackModalOpen, setIsNewFeedbackModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([{
    id: Math.floor(Math.random() * 1000),
    author: {
      avatarUrl: "https://github.com/oliver-zyn.png",
      name: "Oliver Mayer",
      role: "Web Developer",
    },

    content: {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima magni? Odio, iusto accusantium modi fuga dolor quod! Explicabo asperiores vero dolor quibusdam quas quidem ut voluptate nemo nisi? Ex"
    },

    type: "IDEA",

    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: Math.floor(Math.random() * 1000),
    author: {
      avatarUrl: "https://github.com/oliver-zyn.png",
      name: "Oliver Mayer",
      role: "Web Developer",
    },

    content: {
      title: "Meu feedback",
      description: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
    },

    type: "BUG",

    publishedAt: new Date("2022-05-10 20:00:00"),
  },])

  function handleOpenNewFeedbackModal() {
    setIsNewFeedbackModalOpen(true);
  }

  function handleCloseNewFeedbackModal() {
    setIsNewFeedbackModalOpen(false);
  }

  function sendNewFeedback(titleFeedback: string, descriptionFeedback: string, typeFeedback: string) {
    const newFeedback = {
      id: Math.floor(Math.random() * 1000),
      author: {
        avatarUrl: "https://github.com/oliver-zyn.png",
        name: "Oliver Mayer",
        role: "Web Developer",
      },
      content: {
        title: titleFeedback,
        description: descriptionFeedback
      },
      type: typeFeedback,
      publishedAt: new Date(Date.now())
    }

    setPosts([...posts, newFeedback])
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Header
            onOpenNewFeedbackModal={handleOpenNewFeedbackModal}
            postsLength={posts.length}
          />
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                type={post.type}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
        <NewFeedbackModal
          isNewFeedbackModalOpen={isNewFeedbackModalOpen}
          onCloseNewFeedbackModal={handleCloseNewFeedbackModal}
          onSendNewFeedback={sendNewFeedback}
        />
      </div>
    </div>
  );
}
