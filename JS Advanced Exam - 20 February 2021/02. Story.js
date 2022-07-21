// !!! Be carefull , very very carefull , whether in the task want from you
// to console.log , or to return or to throw an Error.
// It will save you a lot of time ;)

class Story {
    #comments;
    #likes;
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
    }
    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        } else {
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
        }
    }
    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } else if (this.creator === username) {
            throw new Error(`You can't like your own story!`);
        } else if (!this.#likes.includes(username)) {
            this.#likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }
    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        } else {
            let index = this.#likes.findIndex(x => x === username);
            this.#likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        }
    }
    comment(username, content, id) {
        let idIndex = this.#comments.findIndex(x => x.id === id);
        if (idIndex === -1) {
            this.#comments.push({
                id: this.#comments.length + 1,
                username,
                content,
                replies: []
            });
            return `${username} commented on ${this.title}`;
        } else if (idIndex !== -1 && idIndex !== undefined) {
            this.#comments[idIndex].replies.push({
                id: id + '.' + Number(this.#comments[idIndex].replies.length + 1),
                username,
                content
            });
            return `You replied successfully`;
        }
    }
    toString(sortingType) {
        let print = `Title: ${this.title}` + '\n' + `Creator: ${this.creator}` + '\n' + `Likes: ${this.#likes.length}` + '\n' + `Comments:`;
        
        switch (sortingType) {
            case 'asc':
                this.#comments
                    .forEach(cmnt => {
                        print += '\n' + `-- ${cmnt.id}. ${cmnt.username}: ${cmnt.content}`;
                        cmnt.replies.forEach(rep => {
                            print +='\n'+ `--- ${rep.id}. ${rep.username}: ${rep.content}`;
                        })
                    })
                break;
            case 'desc':
                this.#comments
                    .sort((a, b) => b.id - a.id)
                    .forEach(cmnt => {
                        print += '\n' + `-- ${cmnt.id}. ${cmnt.username}: ${cmnt.content}`
                        cmnt.replies
                            .sort((a, b) => b.id - a.id)
                            .forEach(rep => {
                                print += '\n' + `--- ${rep.id}. ${rep.username}: ${rep.content}`;
                            })
                    })
                break;
            case 'username':
                this.#comments
                .sort((a, b) => a.username.localeCompare(b.username))
                .forEach(cmnt => {
                    print += '\n' + `-- ${cmnt.id}. ${cmnt.username}: ${cmnt.content}`;
                    cmnt.replies
                        .sort((a, b) => a.username.localeCompare(b.username))
                        .forEach(rep => {
                            print += '\n' + `--- ${rep.id}. ${rep.username}: ${rep.content}`;
                        })
                })
                break;
        }
        return print;
    }
}

// let c = new Story('My story', 'Krasen');
// c.like('Doch')
// c.like('Krasen')
// c.like('Miro')
// c.like('Doch')
// c.likes
// c.dislike('Doch')
// c.likes
// c.comment('Vini', 'Some content')
// c.comment('Pesho', 'Some comment', 1)
// c.comment('Gosho', 'Some comment', 1)
// c.comment('Sami', 'Some content')
// c.toString('username')

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
