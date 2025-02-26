import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';

import styles from './Post.module.css';

export default function Post(props) {
    const [comments, setComments] = useState([
    ])

    const [newCommentText, setNewCommentText] = useState('')

    //Usando intl para formatar o Date
    const publishedDateFormatted = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
            //gerando uma nova lista sem o comentário que deletamos
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentIvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(item => {
                    if (item.type == 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type == 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentIvalid}
                    required
                ></textarea>

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article >
    )
}