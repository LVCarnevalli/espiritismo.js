const path = require("path");
const fetch = (...args) =>
  import(`node-fetch`).then(({ default: fetch }) => fetch(...args));

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(
    `https://raw.githubusercontent.com/LVCarnevalli/espiritismo.static/main/olivrodosespiritos.json`
  );
  const resultData = await result.json();
  createNode({
    questions: resultData.questions,
    id: `data-olivrodosespiritos`,
    parent: null,
    children: [],
    internal: {
      type: `oLivroDosEspiritos`,
      contentDigest: createContentDigest(resultData),
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        oLivroDosEspiritos {
          questions {
            id
            category
            answer
            question
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      result.data.oLivroDosEspiritos.questions.forEach((q) => {
        createPage({
          path: `olivrodosespiritos/${q.id}`,
          component: path.resolve("src/templates/olivrodosespiritos/view.tsx"),
          context: {
            id: q.id,
            category: q.category,
            answer: q.answer,
            question: q.question,
          },
        });
      });

      resolve();
    });
  });
};
