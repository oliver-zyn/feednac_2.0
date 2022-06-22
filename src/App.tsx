import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";
import { Header } from "./components/Header";
import { useState } from "react";
import { NewFeedbackModal } from "./components/NewFeedbackModal";
import { UpdateUserModal } from "./components/UpdateUserModal";

interface Post {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    title: string;
    description: string;
  };
  type: string;
  publishedAt: Date;
}

export function App() {
  const [isNewFeedbackModalOpen, setIsNewFeedbackModalOpen] = useState(false);
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false);
  const [user, setUser] = useState("Usuário Anônimo");
  const [userUrl, setUserUrl] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcKR3b2Q6L7kLv3kV04kBtcs-FaYRsYfxRQ&usqp=CAU')

  const [posts, setPosts] = useState<Post[]>([]);

  function handleOpenNewFeedbackModal() {
    setIsNewFeedbackModalOpen(true);
  }

  function handleCloseNewFeedbackModal() {
    setIsNewFeedbackModalOpen(false);
  }

  function handleOpenUpdateUserModal() {
    setIsUpdateUserModal(true);
  }

  function handleCloseUpdateUserModal() {
    setIsUpdateUserModal(false);
  }

  function updateUser(user: string, userUrl: string) {
    setUser(user);
    setUserUrl(userUrl)
  }

  function sendNewFeedback(
    titleFeedback: string,
    descriptionFeedback: string,
    typeFeedback: string
  ) {
    const newFeedback = {
      id: Math.floor(Math.random() * 1000),
      author: {
        avatarUrl: userUrl,
        name: user,
        role: "Web Developer",
      },
      content: {
        title: titleFeedback,
        description: descriptionFeedback,
      },
      type: typeFeedback,
      publishedAt: new Date(Date.now()),
    };

    setPosts([...posts, newFeedback]);
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <Sidebar user={user} userUrl={userUrl} onOpenUpdateUserModal={handleOpenUpdateUserModal} />
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
        <UpdateUserModal
          isUpdateUserModal={isUpdateUserModal}
          onCloseUpdateUserModal={handleCloseUpdateUserModal}
          onUpdateUser={updateUser}
        />
      </div>
    </div>
  );
}
