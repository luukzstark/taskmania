import * as React from "react"

interface IconProps {
    color: string
}

export function WorkSpaceIcon(props: IconProps) {
    return (
        <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: props.color, borderRadius: '4px' }}
        >
            <path
                d="M15.188 1.125a1.125 1.125 0 011.124 1.125v13.5a1.125 1.125 0 01-1.125 1.125H2.813a1.125 1.125 0 01-1.126-1.125V2.25a1.125 1.125 0 011.125-1.125h12.376zM2.812 0a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 002.813 18h12.376a2.25 2.25 0 002.25-2.25V2.25A2.25 2.25 0 0015.188 0H2.812z"
                fill="#042C71"
            />
            <path
                d="M7.313 3.375A1.125 1.125 0 018.438 2.25h1.124a1.125 1.125 0 011.126 1.125V6.75a1.125 1.125 0 01-1.126 1.125H8.438A1.125 1.125 0 017.312 6.75V3.375zm-4.5 0A1.125 1.125 0 013.937 2.25h1.126a1.125 1.125 0 011.125 1.125v7.875a1.125 1.125 0 01-1.125 1.125H3.938a1.125 1.125 0 01-1.126-1.125V3.375zm9 0a1.125 1.125 0 011.124-1.125h1.126a1.125 1.125 0 011.124 1.125v11.25a1.125 1.125 0 01-1.124 1.125h-1.126a1.125 1.125 0 01-1.124-1.125V3.375z"
                fill="#042C71"
            />
        </svg>
    )
}

export function NewBoardIcon() {
    return (
        <svg
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.002 10.903A.678.678 0 007.5 10.7a.675.675 0 00.2-.498v-2.1H9.82a.648.648 0 00.49-.202.694.694 0 00.192-.499.678.678 0 00-.201-.5.675.675 0 00-.499-.2h-2.1V4.584a.648.648 0 00-.202-.49.694.694 0 00-.498-.193.678.678 0 00-.5.202.675.675 0 00-.2.498v2.1H4.182a.648.648 0 00-.49.203.694.694 0 00-.192.498c0 .198.067.365.201.5.135.134.301.2.499.2h2.1v2.118c0 .199.068.362.202.49.135.129.3.193.499.193zm0 3.5a6.815 6.815 0 01-2.731-.551 7.08 7.08 0 01-2.223-1.496 7.065 7.065 0 01-1.496-2.223A6.83 6.83 0 010 7.403c0-.97.184-1.88.552-2.732a7.081 7.081 0 011.496-2.223A7.066 7.066 0 014.271.952 6.83 6.83 0 017.001.4c.97 0 1.88.184 2.731.552a7.08 7.08 0 012.223 1.496c.63.63 1.13 1.372 1.497 2.223.368.852.552 1.762.551 2.731 0 .969-.184 1.879-.551 2.73a7.08 7.08 0 01-1.497 2.224 7.073 7.073 0 01-2.223 1.497 6.805 6.805 0 01-2.73.55zm0-1.4c1.552 0 2.873-.545 3.965-1.636 1.091-1.09 1.636-2.412 1.636-3.965 0-1.552-.545-2.874-1.636-3.965C9.876 2.346 8.554 1.8 7.002 1.801c-1.552 0-2.874.545-3.965 1.636C1.945 4.527 1.4 5.85 1.4 7.402s.546 2.874 1.637 3.965c1.09 1.091 2.412 1.637 3.965 1.636z"
                fill="#042C71"
            />
        </svg>
    )
}

export function ShareIcon() {
    return (
        <svg
            width={13}
            height={15}
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.502 14.404c-.583 0-1.079-.204-1.487-.613a2.026 2.026 0 01-.613-1.488c0-.082.006-.166.017-.254.012-.087.03-.166.053-.236l-4.936-2.87a2.3 2.3 0 01-.665.41c-.245.1-.502.15-.77.15-.584 0-1.08-.205-1.488-.613A2.026 2.026 0 010 7.402c0-.583.204-1.08.613-1.488A2.026 2.026 0 012.1 5.302c.269 0 .526.049.77.148.246.1.467.237.666.412L8.472 2.99a1.286 1.286 0 01-.053-.236 1.929 1.929 0 01-.017-.254c0-.584.204-1.08.613-1.488A2.026 2.026 0 0110.502.4c.584 0 1.08.205 1.488.613.409.408.613.904.613 1.488 0 .583-.204 1.08-.613 1.488a2.025 2.025 0 01-1.488.612 2.03 2.03 0 01-.77-.149 2.3 2.3 0 01-.665-.41l-4.936 2.87c.023.07.04.149.052.236a1.929 1.929 0 010 .508c-.011.087-.029.166-.052.236l4.936 2.87c.199-.174.42-.311.665-.41.245-.1.502-.15.77-.15.584 0 1.08.205 1.488.613.409.409.613.905.613 1.488 0 .584-.204 1.08-.613 1.488a2.026 2.026 0 01-1.488.613z"
                fill="#042C71"
            />
        </svg>
    )
}

export function HeartIcon() {
    return (
        <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.984 13.156a.786.786 0 01-.368-.093C6.348 12.907 0 9.303 0 4.676a3.991 3.991 0 016.984-2.644 3.99 3.99 0 016.984 2.644c0 4.627-6.348 8.23-6.616 8.387a.786.786 0 01-.368.093zM3.991 2.181a2.494 2.494 0 00-2.494 2.495c0 3.192 4.203 6.06 5.487 6.859 1.285-.798 5.488-3.667 5.488-6.86a2.494 2.494 0 00-4.796-.96.748.748 0 01-1.384 0 2.488 2.488 0 00-2.301-1.534z"
                fill="#042C71"
            />
        </svg>
    )
}
export function NotificationsIcon() {
    return (
        <svg
            width={14}
            height={17}
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.423 11.905V7.958c-.38.076-.759.152-1.138.152h-.38v4.554H3.314V7.35a3.759 3.759 0 013.795-3.795c.076-.987.532-1.822 1.14-2.505C8.02.746 7.564.518 7.108.518c-.835 0-1.518.684-1.518 1.519v.227A5.283 5.283 0 001.796 7.35v4.555L.277 13.423v.76h13.665v-.76l-1.519-1.518zm-6.832 3.037c0 .835.683 1.518 1.518 1.518s1.519-.683 1.519-1.518H5.59zm8.35-11.008c0 1.443-1.214 2.657-2.656 2.657-1.443 0-2.657-1.214-2.657-2.657 0-1.442 1.214-2.657 2.657-2.657 1.442 0 2.657 1.215 2.657 2.657z"
                fill="#042C71"
            />
        </svg>
    )
}
export function ConfigurationsIcon() {
    return (
        <svg
            width={15}
            height={16}
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.493 5.161a3.08 3.08 0 110 6.162 3.08 3.08 0 010-6.162zm0 1.54a1.54 1.54 0 100 3.081 1.54 1.54 0 000-3.08zm-1.54 9.243a.39.39 0 01-.385-.324l-.285-2.04a5.35 5.35 0 01-1.302-.763l-1.918.778a.387.387 0 01-.47-.17l-1.54-2.664a.38.38 0 01.093-.493L1.77 8.989l-.054-.747.054-.77L.146 6.217a.38.38 0 01-.093-.493l1.54-2.665c.093-.17.301-.239.47-.17l1.918.77c.4-.3.817-.562 1.302-.754L5.568.864A.39.39 0 015.953.54h3.08a.39.39 0 01.386.324l.285 2.04c.485.193.9.455 1.301.756l1.918-.77c.17-.07.377 0 .47.169l1.54 2.665a.38.38 0 01-.092.493l-1.625 1.255.054.77-.054.77 1.625 1.256a.38.38 0 01.092.493l-1.54 2.664a.379.379 0 01-.47.17l-1.918-.77c-.4.3-.816.562-1.301.755l-.285 2.04a.39.39 0 01-.385.324H5.953zM6.916 2.08L6.63 4.09a4.23 4.23 0 00-2.334 1.37l-1.856-.8-.578 1.001 1.625 1.194a4.275 4.275 0 000 2.772L1.855 10.83l.578 1.001 1.872-.8a4.194 4.194 0 002.318 1.355l.285 2.018h1.17l.286-2.01a4.25 4.25 0 002.318-1.364l1.871.801.578-1.001-1.633-1.194a4.299 4.299 0 000-2.78l1.625-1.194-.577-1.001-1.856.8A4.174 4.174 0 008.356 4.1L8.07 2.08H6.916z"
                fill="#042C71"
            />
        </svg>
    )
}

interface PremiumProps {
    color: string
}

export function PremiumIcon({ color }: PremiumProps) {
    return (
        <svg
            width={16}
            height={21}
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.68 11.69L8 9.93l2.31 1.76-.88-2.85L11.75 7H8.91L8 4.19 7.09 7H4.25l2.31 1.84-.88 2.85zM16 8c0-4.42-3.58-8-8-8S0 3.58 0 8c0 2.03.76 3.87 2 5.28V21l6-2 6 2v-7.72A7.96 7.96 0 0016 8zM8 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 15l-4 1.02v-3.1C5.18 15.6 6.54 16 8 16s2.82-.4 4-1.08v3.1L8 17z"
                fill={color}
            />
        </svg>
    )
}


// notifications icons
export function AlertIcon() {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.016 24c4.015 0 9.004-.888 10.95-3.384 2.519-3.168-.243-9.396-1.144-11.22C19.547 4.716 15.666 0 12.016 0c-3.65 0-7.532 4.716-9.844 9.396-.9 1.824-3.65 8.052-1.144 11.22C3.012 23.112 8 24 12.015 24zM10.799 8.4c0-.428.232-.825.608-1.039.377-.214.84-.214 1.217 0 .377.214.608.61.608 1.04v4.8c0 .428-.231.824-.608 1.038-.376.215-.84.215-1.217 0A1.197 1.197 0 0110.8 13.2V8.4zm1.217 7.5c.403 0 .79.158 1.075.44.285.28.446.662.446 1.06s-.16.78-.446 1.06a1.532 1.532 0 01-2.15 0 1.49 1.49 0 01-.446-1.06c0-.398.16-.78.445-1.06.286-.282.673-.44 1.076-.44z"
                fill="#FFE792"
            />
        </svg>
    )
}

export function BellIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0048 6.78133C12.3349 6.6419 11.6652 6.6419 11.0233 6.78133C11.1907 6.39055 11.5535 6.13941 12.0001 6.13941C12.4466 6.13965 12.8094 6.39077 13.0048 6.78133ZM24 12C24 18.6142 18.6139 24 12 24C5.38611 24 0 18.6139 0 12C0 5.38611 5.38611 0 12 0C18.6139 0 24 5.38611 24 12ZM14.9302 17.8047H9.06989C9.65583 18.8371 10.7442 19.5349 12.0001 19.5349C13.2559 19.5349 14.372 18.8373 14.9302 17.8047ZM18.7534 15.7955L17.8884 14.0652L16.8837 10.214L16.8557 10.1583C16.4649 9.04189 15.7115 8.09318 14.7348 7.47922C14.7628 7.39552 14.7628 7.33979 14.7628 7.25585C14.7628 5.7209 13.5349 4.49306 12 4.49306C10.4651 4.49306 9.23721 5.7209 9.23721 7.25585C9.23721 7.33956 9.26519 7.42326 9.26519 7.47922C8.31648 8.09315 7.5349 9.01417 7.14432 10.1583L7.11634 10.214L6.11163 14.0652L5.24657 15.7955C5.19061 15.9069 5.16262 16.0466 5.16262 16.1583C5.16262 16.6328 5.52542 16.9955 5.99989 16.9955H15.2646L17.9996 16.9953C18.1391 16.9953 18.2508 16.9673 18.3624 16.9116C18.781 16.7162 18.9484 16.214 18.753 15.7954L18.7534 15.7955Z" fill="#777777" />
        </svg>

    )
}

export function InformationIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9999 12.0044C23.9999 11.9755 23.9992 11.9469 23.9988 11.918C23.9893 10.4986 23.734 9.13724 23.2723 7.8753C23.2653 7.85626 23.2579 7.83741 23.2508 7.81818C23.2246 7.74718 23.1979 7.67655 23.1703 7.60649C23.1359 7.51968 23.1006 7.43325 23.0647 7.34721C23.0639 7.3453 23.0629 7.34302 23.0622 7.34111C21.2539 3.0595 17.0258 0.0411049 12.0924 0.00114223C12.0633 0.000951867 12.0339 0 12.0044 0C11.9728 0 11.9414 0.000761459 11.91 0.00114223C10.3897 0.0123742 8.93639 0.305356 7.60036 0.832122C7.59332 0.834787 7.58646 0.837833 7.57942 0.840879C7.49699 0.873623 7.41513 0.906939 7.33346 0.941395C7.28187 0.963288 7.23066 0.986132 7.17926 1.00879C7.1429 1.02497 7.10615 1.0402 7.07017 1.05657C2.93071 2.92565 0.0391556 7.07923 0.00114223 11.9113C0.00095187 11.9391 0 11.9669 0 11.9949C0 12.0257 0.000761462 12.0564 0.00114223 12.0872C0.0119936 13.6073 0.304597 15.06 0.83076 16.3961C0.848465 16.4412 0.867312 16.4859 0.885588 16.5308C0.903292 16.5744 0.920806 16.6184 0.939084 16.6618C2.74877 20.945 6.9798 23.9623 11.9181 23.9989C11.9435 23.999 11.969 23.9996 11.9945 24C12.024 24 12.0535 23.9992 12.0828 23.9989C13.3975 23.9899 14.6622 23.7702 15.8442 23.3706C15.8933 23.3541 15.9422 23.3362 15.991 23.319C16.0325 23.3044 16.074 23.2903 16.1151 23.2754C20.6851 21.6042 23.961 17.225 23.9985 12.0805C23.9992 12.0546 24 12.0295 24 12.004L23.9999 12.0044ZM12.3342 3.77651C13.5023 3.76718 14.4938 4.77348 14.4886 5.96252C14.4831 7.16452 13.5156 8.14092 12.3302 8.14092C11.1408 8.14092 10.1693 7.16642 10.1661 5.96993C10.1621 4.76086 11.1257 3.78602 12.3342 3.77646V3.77651ZM15.2478 18.7615C14.5 19.591 13.5844 20.1059 12.4524 20.1832C11.8345 20.2253 11.2164 20.2657 10.6064 20.0987C9.49046 19.7928 8.74399 18.773 8.88751 17.6269C9.02934 16.4934 9.2456 15.3697 9.43466 14.2421C9.59914 13.2613 9.776 12.2826 9.93688 11.3013C9.96277 11.1425 9.9464 10.9727 9.92507 10.8114C9.88814 10.5322 9.72005 10.357 9.44343 10.3052C9.28276 10.2751 9.11104 10.2928 8.95496 10.2506C8.73337 10.1906 8.49369 10.1337 8.31112 10.0052C8.01205 9.79446 8.07202 9.36686 8.40992 9.22295C8.57726 9.15175 8.77296 9.12148 8.95629 9.11844C9.66183 9.10663 10.3675 9.11387 11.0732 9.11387V9.11996C11.7946 9.11996 12.5161 9.1173 13.2374 9.1211C13.7093 9.12358 13.9317 9.32423 14.031 9.78434C14.1173 10.1845 14.0046 10.5599 13.9328 10.9443C13.6309 12.5607 13.3347 14.1783 13.0396 15.7959C12.9484 16.2956 12.8663 16.7969 12.7839 17.2983C12.77 17.3826 12.7733 17.4706 12.774 17.5564C12.7852 18.5397 13.407 18.6731 14.1195 18.3878C14.321 18.3071 14.499 18.1689 14.6922 18.0651C15.0263 17.8862 15.2037 17.8808 15.336 18.0356C15.4965 18.2228 15.482 18.5018 15.2478 18.7615Z" fill="white" />
        </svg>

    )
}

export function ConcludedIcon() {
    return (
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6953 9.80589L18.8581 1.19588C18.6537 0.832373 18.3599 0.530517 18.006 0.320612C17.6522 0.110707 17.2509 0.000137651 16.8424 0H7.16972C6.76118 0.000137651 6.35986 0.110707 6.00605 0.320612C5.65223 0.530517 5.35837 0.832373 5.15394 1.19588L0.318483 9.80589C0.113859 10.169 0.00610352 10.5812 0.00610352 11.0009C0.00610352 11.4205 0.113859 11.8327 0.318483 12.1959L5.15394 20.8059C5.35837 21.1694 5.65223 21.4713 6.00605 21.6812C6.35986 21.8911 6.76118 22.0016 7.16972 22.0018H16.8424C17.2509 22.0016 17.6522 21.8911 18.006 21.6812C18.3599 21.4713 18.6537 21.1694 18.8581 20.8059L23.6953 12.1959C23.8991 11.8324 24.0064 11.4203 24.0064 11.0009C24.0064 10.5814 23.8991 10.1693 23.6953 9.80589ZM18.0009 9.31055L13.539 13.8889L11.5989 15.8861C11.3434 16.1478 10.9974 16.2947 10.6367 16.2947C10.2759 16.2947 9.92992 16.1478 9.67438 15.8861L7.73091 13.8889L6.00949 12.1198C5.64056 11.7204 5.43799 11.1887 5.44496 10.6381C5.45193 10.0875 5.66787 9.56138 6.04679 9.17198C6.4257 8.78258 6.93761 8.56065 7.47343 8.55349C8.00925 8.54633 8.5266 8.7545 8.91524 9.13364L10.6367 10.9027L15.0882 6.32438C15.4736 5.92862 15.9961 5.70639 16.5409 5.70655C17.0856 5.70672 17.608 5.92927 17.9931 6.32526C18.3782 6.72125 18.5945 7.25824 18.5943 7.81809C18.5942 8.37794 18.3776 8.91479 17.9923 9.31055H18.0009Z" fill="white" />
        </svg>

    )
}

export function PaintBrushIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            viewBox="0 96 960 960"
            width={20}
            fill="#fff"
            stroke="#000"
            stroke-width='15'
            stroke-linecap="butt"
            stroke-linejoin="miter"

        >
            <path d="M480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-85 32-158t87.5-127q55.5-54 130-84.5T489 176q79 0 150 26.5T763.5 276q53.5 47 85 111.5T880 529q0 108-63 170.5T650 762h-75q-18 0-31 14t-13 31q0 27 14.5 46t14.5 44q0 38-21 58.5T480 976zm0-400zm-233 26q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15zm126-170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15zm214 0q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15zm131 170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15zM480 916q11 0 15.5-4.5T500 897q0-14-14.5-26T471 818q0-46 30-81t76-35h73q76 0 123-44.5T820 529q0-132-100-212.5T489 236q-146 0-247.5 98.5T140 576q0 141 99.5 240.5T480 916z" />
        </svg>
    )
}

export function SigninIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8ZM13 8C13 8.53043 12.7893 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 11 10C10.4696 10 9.96086 9.78929 9.58579 9.41421C9.21071 9.03914 9 8.53043 9 8C9 7.46957 9.21071 6.96086 9.58579 6.58579C9.96086 6.21071 10.4696 6 11 6C11.5304 6 12.0391 6.21071 12.4142 6.58579C12.7893 6.96086 13 7.46957 13 8Z" fill="#042C71" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 13.09 2.713 15.014 3.908 16.542C4.74723 15.4399 5.8299 14.5467 7.07143 13.9323C8.31297 13.3179 9.67974 12.9988 11.065 13C12.4323 12.9987 13.7819 13.3095 15.0109 13.9088C16.2399 14.508 17.316 15.3799 18.157 16.458C19.0234 15.3216 19.6068 13.9952 19.8589 12.5886C20.111 11.182 20.0244 9.73553 19.6065 8.36898C19.1886 7.00243 18.4512 5.75505 17.4555 4.73004C16.4598 3.70503 15.2343 2.93186 13.8804 2.47451C12.5265 2.01716 11.0832 1.88877 9.66986 2.09997C8.25652 2.31117 6.91379 2.85589 5.75277 3.68905C4.59175 4.52222 3.64581 5.61987 2.99323 6.8912C2.34065 8.16252 2.00018 9.57097 2 11ZM11 20C8.93395 20.0031 6.93027 19.2923 5.328 17.988C5.97293 17.0647 6.83134 16.3109 7.83019 15.7907C8.82905 15.2705 9.93879 14.9992 11.065 15C12.1772 14.9991 13.2735 15.2636 14.2629 15.7714C15.2524 16.2793 16.1064 17.0159 16.754 17.92C15.1393 19.2667 13.1026 20.0029 11 20Z" fill="#042C71" />
        </svg>
    )
}

export function SignOutIcon() {
    return (
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7293 13.5083V10.934H5.72273V7.50165H11.7293V4.92739L16.0198 9.21782L11.7293 13.5083ZM10.0132 0.636963C10.4683 0.636963 10.9048 0.817773 11.2267 1.13962C11.5485 1.46146 11.7293 1.89798 11.7293 2.35313V4.06931H10.0132V2.35313H2.29039V16.0825H10.0132V14.3663H11.7293V16.0825C11.7293 16.5377 11.5485 16.9742 11.2267 17.296C10.9048 17.6179 10.4683 17.7987 10.0132 17.7987H2.29039C1.83523 17.7987 1.39872 17.6179 1.07687 17.296C0.755029 16.9742 0.574219 16.5377 0.574219 16.0825V2.35313C0.574219 1.89798 0.755029 1.46146 1.07687 1.13962C1.39872 0.817773 1.83523 0.636963 2.29039 0.636963H10.0132Z" fill="white" />
        </svg>

    )
}


export function AccountCircleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="20px" viewBox="0 0 20 20" width="20px" fill="#FFFFFF"><g>
            <rect fill="none" height="20" width="20" />
        </g>
            <g>
                <g>
                    <path d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 11c-2.05 0-3.87-.95-5.07-2.44 1.45-.98 3.19-1.56 5.07-1.56s3.62.58 5.07 1.56c-1.2 1.49-3.02 2.44-5.07 2.44z" />
                </g>
            </g>
        </svg>
    )

}

export function OptionsIcon() {
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.64473 6.26484C10.6964 6.26484 11.705 6.68261 12.4486 7.42625C13.1923 8.16988 13.61 9.17847 13.61 10.2301C13.61 11.2818 13.1923 12.2904 12.4486 13.034C11.705 13.7777 10.6964 14.1954 9.64473 14.1954C8.59307 14.1954 7.58448 13.7777 6.84084 13.034C6.09721 12.2904 5.67943 11.2818 5.67943 10.2301C5.67943 9.17847 6.09721 8.16988 6.84084 7.42625C7.58448 6.68261 8.59307 6.26484 9.64473 6.26484ZM9.64473 8.24749C9.1189 8.24749 8.6146 8.45637 8.24279 8.82819C7.87097 9.20001 7.66208 9.7043 7.66208 10.2301C7.66208 10.756 7.87097 11.2603 8.24279 11.6321C8.6146 12.0039 9.1189 12.2128 9.64473 12.2128C10.1706 12.2128 10.6749 12.0039 11.0467 11.6321C11.4185 11.2603 11.6274 10.756 11.6274 10.2301C11.6274 9.7043 11.4185 9.20001 11.0467 8.82819C10.6749 8.45637 10.1706 8.24749 9.64473 8.24749ZM7.66208 20.1434C7.41425 20.1434 7.20607 19.9649 7.16642 19.727L6.79963 17.1C6.1751 16.8522 5.63978 16.5151 5.12429 16.1186L2.6559 17.1198C2.4378 17.1991 2.17015 17.1198 2.05119 16.9017L0.0685407 13.4718C0.00786731 13.3696 -0.0135223 13.2489 0.00837192 13.1321C0.0302661 13.0153 0.0939449 12.9105 0.1875 12.8373L2.27919 11.1917L2.2098 10.2301L2.27919 9.23881L0.1875 7.62295C0.0939449 7.54973 0.0302661 7.44493 0.00837192 7.32816C-0.0135223 7.21139 0.00786731 7.09065 0.0685407 6.9885L2.05119 3.55852C2.17015 3.34043 2.4378 3.25121 2.6559 3.34043L5.12429 4.33176C5.63978 3.94514 6.1751 3.60809 6.79963 3.36026L7.16642 0.733251C7.20607 0.495333 7.41425 0.316895 7.66208 0.316895H11.6274C11.8752 0.316895 12.0834 0.495333 12.123 0.733251L12.4898 3.36026C13.1144 3.60809 13.6497 3.94514 14.1652 4.33176L16.6336 3.34043C16.8517 3.25121 17.1193 3.34043 17.2383 3.55852L19.2209 6.9885C19.3498 7.2066 19.2903 7.47425 19.102 7.62295L17.0103 9.23881L17.0797 10.2301L17.0103 11.2215L19.102 12.8373C19.2903 12.986 19.3498 13.2537 19.2209 13.4718L17.2383 16.9017C17.1193 17.1198 16.8517 17.2091 16.6336 17.1198L14.1652 16.1285C13.6497 16.5151 13.1144 16.8522 12.4898 17.1L12.123 19.727C12.0834 19.9649 11.8752 20.1434 11.6274 20.1434H7.66208ZM8.90124 2.29954L8.53445 4.8869C7.34486 5.13473 6.29405 5.76918 5.53074 6.65145L3.14165 5.62048L2.39815 6.9092L4.48985 8.44575C4.09332 9.60229 4.09332 10.858 4.48985 12.0145L2.38824 13.561L3.13173 14.8497L5.54065 13.8187C6.30397 14.6911 7.34486 15.3255 8.52453 15.5635L8.89132 18.1607H10.3981L10.7649 15.5734C11.9446 15.3255 12.9855 14.6911 13.7488 13.8187L16.1577 14.8497L16.9012 13.561L14.7996 12.0244C15.1961 10.8646 15.1961 9.6056 14.7996 8.44575L16.8913 6.9092L16.1478 5.62048L13.7587 6.65145C12.9798 5.74967 11.9231 5.13242 10.755 4.89681L10.3882 2.29954H8.90124Z" fill="white" />
        </svg>
    )
}

export function MenuList() {
    return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9.34526H13C13.4125 9.34526 13.75 8.99871 13.75 8.57514C13.75 8.15157 13.4125 7.80501 13 7.80501H1C0.5875 7.80501 0.25 8.15157 0.25 8.57514C0.25 8.99871 0.5875 9.34526 1 9.34526ZM1 5.49464H13C13.4125 5.49464 13.75 5.14808 13.75 4.72451C13.75 4.30094 13.4125 3.95439 13 3.95439H1C0.5875 3.95439 0.25 4.30094 0.25 4.72451C0.25 5.14808 0.5875 5.49464 1 5.49464ZM0.25 0.873885C0.25 1.29745 0.5875 1.64401 1 1.64401H13C13.4125 1.64401 13.75 1.29745 13.75 0.873885C13.75 0.450316 13.4125 0.10376 13 0.10376H1C0.5875 0.10376 0.25 0.450316 0.25 0.873885Z" fill="#042C71" />
        </svg>

    )
}

export function Clock() {
    return (
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0.50293C2.25 0.50293 0 2.75293 0 5.50293C0 8.25293 2.25 10.5029 5 10.5029C7.75 10.5029 10 8.25293 10 5.50293C10 2.75293 7.75 0.50293 5 0.50293ZM7.1 7.60293L4.5 6.00293V3.00293H5.25V5.60293L7.5 6.95293L7.1 7.60293Z" fill="#042C71" />
        </svg>

    )
}

export function Pencil() {
    return (
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8667 5.10373L8.03333 2.30373L8.96667 1.37039C9.22222 1.11484 9.53622 0.987061 9.90867 0.987061C10.2811 0.987061 10.5949 1.11484 10.85 1.37039L11.7833 2.30373C12.0389 2.55928 12.1722 2.86773 12.1833 3.22906C12.1944 3.59039 12.0722 3.89862 11.8167 4.15373L10.8667 5.10373ZM9.9 6.08706L2.83333 13.1537H0V10.3204L7.06667 3.25373L9.9 6.08706Z" fill="#042C71" />
        </svg>

    )
}

export function NewListIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.905 14.52 11.0007 14.2827 11 14V11H14.025C14.3083 11 14.5417 10.904 14.725 10.712C14.9083 10.52 15 10.2827 15 10C15 9.71667 14.904 9.479 14.712 9.287C14.52 9.095 14.2827 8.99933 14 9H11V5.975C11 5.69167 10.904 5.45833 10.712 5.275C10.52 5.09167 10.2827 5 10 5C9.71667 5 9.479 5.096 9.287 5.288C9.095 5.48 8.99933 5.71733 9 6V9H5.975C5.69167 9 5.45833 9.096 5.275 9.288C5.09167 9.48 5 9.71733 5 10C5 10.2833 5.096 10.521 5.288 10.713C5.48 10.905 5.71733 11.0007 6 11H9V14.025C9 14.3083 9.096 14.5417 9.288 14.725C9.48 14.9083 9.71733 15 10 15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.2217 14.105 18.0007 12.2173 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.105 2.77833 12.2173 1.99933 10 2C7.78333 2 5.89567 2.779 4.337 4.337C2.77833 5.895 1.99933 7.78267 2 10C2 12.2167 2.779 14.1043 4.337 15.663C5.895 17.2217 7.78267 18.0007 10 18Z" fill="#A5A5A5" />
        </svg>

    )
}

