export const getUserById = (users, userId) => users.find((user) => user.id === userId);

export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "todo":
      return "icons_FEtask/To-do.svg"; // Todo status
    case "in progress":
      return "icons_FEtask/in-progress.svg"; // In Progress status
    case "done":
      return "icons_FEtask/Done.svg"; // Done status
    case "backlog":
      return "icons_FEtask/Backlog.svg"; // Backlog status
    case "cancelled":
      return "icons_FEtask/Cancelled.svg"; // Cancelled status
    default:
      return ""; // Default empty or fallback path if the status doesn't match
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "Urgent":
      return "icons_FEtask/SVG - Urgent Priority colour.svg"; // Urgent Priority
    case "High":
      return "icons_FEtask/Img - High Priority.svg"; // High Priority
    case "Medium":
      return "icons_FEtask/Img - Medium Priority.svg"; // Medium Priority
    case "Low":
      return "icons_FEtask/Img - Low Priority.svg"; // Low Priority
    default:
      return "icons_FEtask/No-priority.svg"; // No Priority
  }
};

export const getUserIcon = (username) => {
  return `https://via.placeholder.com/32?text=${username[0]}`;
};