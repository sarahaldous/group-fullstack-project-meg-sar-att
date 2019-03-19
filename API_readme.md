# API Documentation


##Basic interaction:

### Quests
#### Get all quests
    Use `/quests` to get an array of all quests in the database
#### Get one quest
    Use `/quests/:_id` where `_id` is the ID of the quest you wish to retrieve
#### Post NEW quest
    Use `/quests` to create a new quest
    Available fields are: 
        title *
        summary *
        description
        youtubeEmbed    (String of YouTube video embedding code)
        imageUrl        (URL string of ONE chosen picture)
        qLNovice *      (!Short! Description of particulars
        qLJourneyman *      required for each level of
        qLMaster *              expertise)
    Items denoted with a * are required
#### Delete one quest
    Use `/quests/:_id` to permanently delete a particular quest from the database
#### Update one quest
    Use `/quests/:_id` when submitting an object that includes one or more of the fields listed above under "Post NEW quest"

### Players
#### Get all players
    Use `/players` to get an array of all players in the database
#### Get One player
    Use `/players/:_id` where `_id` is the ID of the player you wish to retrieve
#### Post NEW player
    Use `/players` to create a new player
    Available fields are: 
        name *
        avatar (URL string of ONE chosen picture)
    Items denoted with a * are required
#### Delete one player
    Use `/players/:_id` to permanently delete a particular player from the database
#### Update one player
    Use `/players/:_id` when submitting an object that includes one or more of the fields listed above under "Post NEW player"