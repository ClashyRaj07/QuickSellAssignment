import React, { useEffect, useState } from "react";
import "./Board.css"; // Styling for the Kanban board
import Card from "../Card/Card";
import NestedDropdown from "../DropDown/DropDown";
import useFetch from "../../hooks/useFetch";
import { getPriorityIcon, getStatusIcon, getUserById, getUserIcon } from "../../utils";



const BoardLayout = ({ tickets, users }) => {
  const [groupBy, setGroupBy] = useState("status"); // Default grouping by status
  const [sortBy, setSortBy] = useState("priority"); // Default sorting by priority
 
  const groupTickets = () => {
    if (groupBy === "status") {
      return groupByStatus();
    } else if (groupBy === "user") {
      return groupByUser();
    } else if (groupBy === "priority") {
      return groupByPriority();
    }
  };

  const groupByStatus = () => {
    const statuses = ["Todo", "In progress", "Backlog"];
    return statuses.map((status) => ({
      title: status,
      tickets: tickets.filter((ticket) => ticket.status === status),
    }));
  };

  const groupByUser = () => {
    return users.map((user) => ({
      title: user.name,
      tickets: tickets.filter((ticket) => ticket.userId === user.id),
    }));
  };

  const groupByPriority = () => {
    const priorities = ["No priority", "Low", "Medium", "High", "Urgent"];
    return priorities.map((priority, index) => ({
      title: priority,
      tickets: tickets.filter((ticket) => ticket.priority === index),
    }));
  };

  const sortTickets = (tickets) => {
    if (sortBy === "priority") {
      return [...tickets].sort((a, b) => b.priority - a.priority);
    } else if (sortBy === "title") {
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
  };


  return (
    <div>
      <div className="controls">

        <NestedDropdown setGroupBy={setGroupBy} setSortBy={setSortBy} groupBy={groupBy} sortBy={sortBy}/>
       
      </div>
      <div className="board">
        {groupTickets()?.map((group) => (
          <div key={group.title} className="board-column">
            <div className="board-header">
              <div>
                <img
                  src={
                    groupBy === "status"
                      ? getStatusIcon(group.title)
                      : groupBy === "priority"
                      ? getPriorityIcon(group.title)
                      : getUserIcon(group.title)
                  }
                  alt="Board Header Icon"
                  className="board-header-image"
                />
                <h2>{group.title}</h2>
                <span className="board-header_ticket_count">
                  {group?.tickets?.length ?? 0}
                </span>
              </div>
              <div>
                <img src="icons_FEtask/add.svg" alt="" />
                <img src="icons_FEtask/3 dot menu.svg" alt="" />
              </div>
            </div>

            {sortTickets(group.tickets).map((ticket) => {
              const user = getUserById(users, ticket.userId);
              return (
                <Card
                  key={ticket.id}
                  ticket={ticket}
                  user={user}
                  groupBy={groupBy}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// App Component to hold the board
function Board() {

  const {data,loading}=useFetch('https://api.quicksell.co/v1/internal/frontend-assignment')
  
  // useEffect(()=>{},[data,loading])

  if(loading ||!data) return <div>Loading...</div>
  

  return <BoardLayout tickets={data?.tickets} users={data?.users} />;
}

export default Board;
