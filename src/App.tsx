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
    comments: string[];
  };
  type: string;
  publishedAt: Date;
}

export function App() {
  const [isNewFeedbackModalOpen, setIsNewFeedbackModalOpen] = useState(false);
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false);
  const [user, setUser] = useState("Usuário Anônimo");
  const [userUrl, setUserUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcKR3b2Q6L7kLv3kV04kBtcs-FaYRsYfxRQ&usqp=CAU"
  );

  const [posts, setPosts] = useState<Post[]>([
    {
      id: Math.floor(Math.random() * 1000),
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/89222905?v=4",
        name: "Oliver Mayer",
        role: "Web Developer",
      },
      content: {
        title: "Meu Feedback!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ipsa. Quos reiciendis eius hic odit quod eaque ad accusamus. Corrupti odit, suscipit distinctio ex dicta inventore harum adipisci amet numquam.",
        comments: ["Muito Bom!"],
      },
      type: "Bug",
      publishedAt: new Date(Date.now()),
    },
  ]);

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
    setUserUrl(userUrl);
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
        comments: [],
      },
      type: typeFeedback,
      publishedAt: new Date(Date.now()),
    };

    setPosts([...posts, newFeedback]);
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <Sidebar
          user={user}
          userUrl={userUrl}
          onOpenUpdateUserModal={handleOpenUpdateUserModal}
        />
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
                user={user}
                userUrl={userUrl}
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
