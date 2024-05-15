import Heading from "../components/typography/Heading";

function Home() {
  return (
    <>
      <header className="mb-16">
        <Heading>Adin Vashi</Heading>
        <div className="">
          <span className="block">Software Engineer</span>
          <span className="block">Writes occasionally</span>
          <span className="block">Lives in NYC</span>
        </div>
      </header>
      <section className="mb-16">
        <h2 className="font-bold text-2xl mb-8 text-neutral-100">Projects</h2>
        <div className="flex flex-col">
          <button className="hover:bg-gradient-to-r bg-zinc-500 from-blue-600 to-purple-600 rounded-xl p-px max-w-lg mb-8">
            <a href="https://audiome.io" target="_blank" rel="noreferrer">
              <div className="px-12 py-20 bg-neutral-900  border-2 border-neutral-400 shadow rounded-xl cursor-pointer">
                <div className="mx-auto text-left">
                  <span className="block font-bold text-lg text-neutral-100">
                    Audiome
                  </span>
                  <span className="block  mb-4">Co-founder</span>
                  <span className="block  max-w-lg">
                    {
                      "A hip-hop data website that allows users to see an artist's guest features or two artists' guest features"
                    }
                  </span>
                </div>
              </div>
            </a>
          </button>
          <button className="hover:bg-gradient-to-r bg-zinc-500 from-blue-600 to-purple-600 rounded-lg p-px max-w-lg mb-8">
            <a href="https://catalogger.xyz" target="_blank" rel="noreferrer">
              <div className="p-12 bg-neutral-900  border-2 border-neutral-400 shadow rounded-lg cursor-pointer">
                <div className="mx-auto text-left">
                  <span className="block font-bold text-lg text-neutral-100">
                    Catalogger
                  </span>
                  <span className="block  mb-4">Creator</span>
                  <span className="block  max-w-lg">
                    A custom tool to help me organize my Spotify playlists while
                    listening
                  </span>
                </div>
              </div>
            </a>
          </button>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="font-bold text-2xl mb-8 text-neutral-100">
          Work History
        </h2>
        <div className="mb-8">
          <h3 className="font-bold text-lg text-neutral-100">Loxo</h3>
          <span className="block">2024 - Present</span>
          <br />
          <span className="block">Full-stack Engineer</span>
          <span className="block">
            React, Redux, GraphQL, Ruby on Rails, Postgres, AWS
          </span>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-lg text-neutral-100">
            Isometric Technologies
          </h3>
          <span className="block">2022 - 2023</span>
          <br />
          <span className="block">Full-stack Engineer</span>
          <span className="block">
            React, Redux, Ruby on Rails, Postgres, AWS
          </span>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-lg text-neutral-100">Mainvest</h3>
          <span className="block">2021 - 2022</span>
          <br />
          <span className="block">Full-stack Engineer</span>
          <span className="block">Vue, Vuex, Django, Postgres, Heroku</span>
        </div>
      </section>
    </>
  );
}

export default Home;
