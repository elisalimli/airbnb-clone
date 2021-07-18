export async function getServerSideProps(context) {
  console.log("heyheh", context);
  return {
    props: {
      posts: [{ name: "ali" }],
    }, // will be passed to the page component as props
  };
}
