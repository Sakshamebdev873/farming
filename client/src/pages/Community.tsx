import React, { useState } from "react";
import { UsersIcon, MessageSquareIcon, SendIcon } from "lucide-react";

export const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Ravi Sharma",
      message: "Has anyone tried drip irrigation for sugarcane this season?",
      replies: ["Yes! It improved my yield by 20%."],
    },
    {
      id: 2,
      name: "Priya Verma",
      message: "Looking for organic pest control for tomatoes.",
      replies: ["Use neem oil spray every 7 days. Works great!"],
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim() === "") return;
    setPosts((prev) => [
      { id: prev.length + 1, name: "You", message: newPost, replies: [] },
      ...prev,
    ]);
    setNewPost("");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
        <UsersIcon className="h-8 w-8 text-green-700" />
        Farmers’ Community 🌾
      </h1>
      <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
        Share your farming experiences, ask questions, and learn from fellow farmers.
      </p>

      {/* Post box */}
      <div className="bg-white border border-green-100 rounded-xl shadow-md p-5 mb-8">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts or ask a question..."
          className="w-full border border-green-200 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
          rows={3}
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={addPost}
            className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold flex items-center gap-2"
          >
            <SendIcon className="h-5 w-5" /> Post
          </button>
        </div>
      </div>

      {/* Posts list */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-green-100 rounded-xl shadow p-5"
          >
            <h3 className="font-semibold text-green-800 mb-1">{post.name}</h3>
            <p className="text-gray-700 mb-3">{post.message}</p>
            {post.replies.length > 0 && (
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-gray-800">
                  💬 <strong>Replies:</strong>
                </p>
                {post.replies.map((reply, idx) => (
                  <p key={idx} className="text-sm text-gray-700 mt-1">
                    {reply}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
