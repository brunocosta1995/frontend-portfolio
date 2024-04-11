export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user-card-container">
      <div className="user_avatar">
        <img src={avatar_url} className="user-avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          Usuário entrou no Github em:{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("pt-br", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="user-data">
        <div>
          <p>Repositório Público: {public_repos}</p>
        </div>
        <div>
          <p>Seguidores: {followers}</p>
        </div>
        <div>
          <p>Seguindo: {following}</p>
        </div>
      </div>
    </div>
  );
}
