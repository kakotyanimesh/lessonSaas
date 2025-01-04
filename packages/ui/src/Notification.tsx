interface NotificationProps {
    msg : string
}

export const Notification = ({msg} : NotificationProps) => {
    return (
        <div>
            <h1>
                {msg}
            </h1>
        </div>
    )
}