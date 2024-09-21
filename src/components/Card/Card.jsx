import "./Card.css";
const Card = ({ ticket, user,groupBy }) => {
  console.log(ticket)
  const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return "icons_FEtask/SVG - Urgent Priority colour.svg"; // Urgent Priority
      case 3:
        return "icons_FEtask/Img - High Priority.svg"; // High Priority
      case 2:
        return "icons_FEtask/Img - Medium Priority.svg"; // Medium Priority
      case 1:
        return "icons_FEtask/Img - Low Priority.svg"; // Low Priority
      case 0:
      default:
        return "icons_FEtask/No-priority.svg"; // No Priority
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'todo':
        return 'icons_FEtask/To-do.svg'; // Todo status
      case 'in progress':
        return 'icons_FEtask/in-progress.svg'; // In Progress status
      case 'done':
        return 'D:/QuickSell/frontend/icons_FEtask/Done.svg'; // Done status
      case 'backlog':
        return 'icons_FEtask/Backlog.svg'; // Backlog status
      case 'cancelled':
        return 'icons_FEtask/Cancelled.svg'; // Cancelled status
      default:
        return ''; // Default empty or fallback path if the status doesn't match
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <span className="task-id">{ticket.id}</span>
        <div className="assignee">
          <img
            src={`https://via.placeholder.com/32?text=${user.name[0]}`}
            alt={user.name}
            className="assignee-img"
          />
        </div>
      </div>
      <div className="card-body">
        {
          groupBy!=="status" && <img src={getStatusIcon(ticket.status)} alt="Priority_Icon" />
        }
        {ticket.title}
        {/* <h3 className="task-title">{ticket.title}</h3> */}
      </div>
      <div className="card-footer">
        {groupBy!=="priority" && <p className="task-tag">
          <img src={getPriorityIcon(ticket.priority)} alt="Priority_Icon" />
        </p>}
        <p className="task-tag">
          <span className="task-tag_dot"/>
          {ticket.tag.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default Card;
