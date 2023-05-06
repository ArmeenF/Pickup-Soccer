function fillNames() {
    // Define the player names for each position
    const goalkeepers = ["GK 1", "GK 2"];
    const defenders = ["Defender 1", "Defender 2", "Defender 3", "Defender 4", "Defender 5", "Defender 6", "Defender 7", "Defender 8"];
    const midfielders = ["Midfielder 1", "Midfielder 2", "Midfielder 3", "Midfielder 4", "Midfielder 5", "Midfielder 6"];
    const forwards = ["Forward 1", "Forward 2", "Forward 3", "Forward 4", "Forward 5", "Forward 6"];

    // Fill in the player names for each position
    document.getElementsByName("gk1")[0].value = goalkeepers[Math.floor(Math.random() * goalkeepers.length)];
    document.getElementsByName("gk2")[0].value = goalkeepers[Math.floor(Math.random() * goalkeepers.length)];
    document.getElementsByName("def1")[0].value = defenders[Math.floor(Math.random() * defenders.length)];
    document.getElementsByName("def2")[0].value = defenders[Math.floor(Math.random() * defenders.length)];
    document.getElementsByName("def3")[0].value = defenders[Math.floor(Math.random() * defenders.length)];
    document.getElementsByName("def4")[0].value = defenders[Math.floor(Math.random() * defenders.length)];
    document.getElementsByName("def5")[0].value = defenders[Math.floor(Math.random() * defenders.length)];
    document.getElementsByName("def6")[0].value = defenders[Math.floor(Math.random() * defenders.length)];
    document.getElementsByName("def7")[0].value = defenders[Math.floor(Math.random() * defenders.length)];
    document.getElementsByName("def8")[0].value = defenders[Math.floor(Math.random() * defenders.length)];
    document.getElementsByName("mid1")[0].value = midfielders[Math.floor(Math.random() * midfielders.length)];
    document.getElementsByName("mid2")[0].value = midfielders[Math.floor(Math.random() * midfielders.length)];
    document.getElementsByName("mid3")[0].value = midfielders[Math.floor(Math.random() * midfielders.length)];
    document.getElementsByName("mid4")[0].value = midfielders[Math.floor(Math.random() * midfielders.length)];
    document.getElementsByName("mid5")[0].value = midfielders[Math.floor(Math.random() * midfielders.length)];
    document.getElementsByName("mid6")[0].value = midfielders[Math.floor(Math.random() * midfielders.length)];
    document.getElementsByName("fwd1")[0].value = forwards[Math.floor(Math.random() * forwards.length)];
    document.getElementsByName("fwd2")[0].value = forwards[Math.floor(Math.random() * forwards.length)];
    document.getElementsByName("fwd3")[0].value = forwards[Math.floor(Math.random() * forwards.length)];
    document.getElementsByName("fwd4")[0].value = forwards[Math.floor(Math.random() * forwards.length)];
    document.getElementsByName("fwd5")[0].value = forwards[Math.floor(Math.random() * forwards.length)];
    document.getElementsByName("fwd6")[0].value = forwards[Math.floor(Math.random() * forwards.length)];

    // Prevent the form from submitting
    event.preventDefault();
}

function randomize() {
    const goalkeepers = [
        document.getElementsByName("gk1")[0].value,
        document.getElementsByName("gk2")[0].value,
    ];
    const defenders = [
        document.getElementsByName("def1")[0].value,
        document.getElementsByName("def2")[0].value,
        document.getElementsByName("def3")[0].value,
        document.getElementsByName("def4")[0].value,
        document.getElementsByName("def5")[0].value,
        document.getElementsByName("def6")[0].value,
        document.getElementsByName("def7")[0].value,
        document.getElementsByName("def8")[0].value,
    ];
    const midfielders = [
        document.getElementsByName("mid1")[0].value,
        document.getElementsByName("mid2")[0].value,
        document.getElementsByName("mid3")[0].value,
        document.getElementsByName("mid4")[0].value,
        document.getElementsByName("mid5")[0].value,
        document.getElementsByName("mid6")[0].value,
    ];
    const forwards = [
        document.getElementsByName("fwd1")[0].value,
        document.getElementsByName("fwd2")[0].value,
        document.getElementsByName("fwd3")[0].value,
        document.getElementsByName("fwd4")[0].value,
        document.getElementsByName("fwd5")[0].value,
        document.getElementsByName("fwd6")[0].value,
    ];

    // Shuffle the players in each position
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    const shuffledGoalkeepers = shuffleArray(goalkeepers);
    const shuffledDefenders = shuffleArray(defenders);
    const shuffledMidfielders = shuffleArray(midfielders);
    const shuffledForwards = shuffleArray(forwards);

    // Divide players into two teams
    const team1 = [
        shuffledGoalkeepers[0],
        shuffledDefenders[0],
        shuffledDefenders[1],
        shuffledDefenders[2],
        shuffledDefenders[3],
        shuffledMidfielders[0],
        shuffledMidfielders[1],
        shuffledMidfielders[2],
        shuffledForwards[0],
        shuffledForwards[1],
        shuffledForwards[2],
    ];
    const team2 = [
        shuffledGoalkeepers[1],
        shuffledDefenders[4],
        shuffledDefenders[5],
        shuffledDefenders[6],
        shuffledDefenders[7],
        shuffledMidfielders[3],
        shuffledMidfielders[4],
        shuffledMidfielders[5],
        shuffledForwards[3],
        shuffledForwards[4],
        shuffledForwards[5],
    ];

    // Display the team members in two lists
    // Two empty unordered lists (team1List,team2List)
    const team1List = document.createElement("ul");
    const team2List = document.createElement("ul");

    // Iterate over each player in team1 and team2 using the forEach() method.
    //For each player, it creates a new list item (<li>) using document.createElement("li"),
    team1.forEach((player) => {
        const listItem = document.createElement("li");
        listItem.textContent = player;
        team1List.appendChild(listItem);
    });

    team2.forEach((player) => {
        const listItem = document.createElement("li");
        listItem.textContent = player;
        team2List.appendChild(listItem);
    });

    const teamListsContainer = document.createElement("div");
    teamListsContainer.classList.add("team-lists");
    teamListsContainer.appendChild(team1List);
    teamListsContainer.appendChild(team2List);

    const teamForm = document.querySelector(".team-form");
    teamForm.appendChild(teamListsContainer);

    // Prevent the form from submitting
    event.preventDefault();
}