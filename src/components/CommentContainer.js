import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((item) => (
    <>
      <Comment comments={item} />

      {item?.reply?.length > 0 && (
        <div className="ml-4  flex flex-col  gap-4 border  border-l-black ">
          <CommentsList comments={item.reply} />
        </div>
      )}
      {console.log(
        "🚀 ~ file: CommentContainer.js:8 ~ CommentsList ~ item?.reply.length:",
        item?.reply?.length
      )}
    </>
  ));
};

function CommentContainer() {
  const comments = [
    {
      id: 1,
      name: "xyz",
      comment: "hey ✅",
      reply: [
        {
          id: 1,
          name: "xyz",
          comment: "nested Level 1 ✅",
          reply: [
            {
              id: 1,
              name: "xyz",
              comment: "nested level 2 ✅",
              reply: [
                {
                  id: 1,
                  name: "xyz",
                  comment: "nested level 3 ✅",
                  reply: [
                    {
                      id: 1,
                      name: "xyz",
                      comment: "nested level 4 ✅",
                      reply: [
                        {
                          id: 1,
                          name: "xyz",
                          comment: "nested level 5 ✅",
                          reply: [
                            {
                              id: 1,
                              name: "xyz",
                              comment: "nested level 6 ✅",
                              reply: [
                                {
                                  id: 1,
                                  comment: "nested level 7 ✅",
                                  reply: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 1,
                          name: "xyz",
                          comment: "nested level 6 ✅",
                          reply: [
                            {
                              id: 1,
                              name: "xyz",
                              comment: "nested level 7 ✅",
                              reply: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "xyz",
      comment: "hey 2✅",
      reply: [],
    },
    {
      id: 3,
      name: "xyz",
      comment: "hey 3",
      reply: [],
    },
    {
      id: 4,
      name: "xyz",
      comment: "hey 4 ✅",
      reply: [],
    },
    {
      id: 5,
      name: "xyz",
      comment: "hey 5✅",
      reply: [],
    },
  ];

  return (
    <div className="border-2 border-[#000] flex flex-col gap-4 px-2">
      <h1 className="text-2xl">Comments:</h1>
      <CommentsList comments={comments} />
    </div>
  );
}

export default CommentContainer;
