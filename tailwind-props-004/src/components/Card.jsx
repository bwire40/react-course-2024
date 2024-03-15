/* eslint-disable react/prop-types */
// props
function Card({
  username = "manu",
  post = "Not Asigned yet",
  image = "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=300",
  myArry,
}) {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 my-2 md:p-0">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={image}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
          {myArry}
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-50 dark:text-slate-500">{post}</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
