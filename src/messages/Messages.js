export const Messages = ({userId, id, body, title}) => {
  return (
      <div>
          <b>ID пользователя:</b> {userId}
          <div>
              <b>ID идетификатор:</b> <span>{id}</span>
          </div>
          <b>Заголовок:</b>
          <span>{title}</span>
          <div>
              <b>Текст:</b>
              <span>{body}</span>
          </div>


      </div>
  )
}