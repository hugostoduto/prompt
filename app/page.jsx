import Feed from '@components/Feed'


const Home = () => {
  return (
    <section
      className='w-full flex-center flex-col'
    >
      <h1 className="head_text text-center">
        Dicover & Share
        <br className="max-md:hidden" />
        <span className='orange_gradient text-center'>Ai-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        open-source AI prompting tool for modern world dicover, create and share creative prompts
      </p>
      <Feed />


    </section>
  )
}

export default Home