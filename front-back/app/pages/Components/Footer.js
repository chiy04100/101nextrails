import Link from 'next/link'

export function Footer() { 
<ul>
    <li>
        <Link href="/">
            <p>Home</p>
        </Link>
        </li>
        <li>
        <Link href="/post">
            <p>Post EC</p>
        </Link>
        </li>
        <li>
        <Link href="/check">
            <p>Check Us</p>
        </Link>
        </li>
        <li>
        <Link href="/confirmation">
            <p>Confirmation</p>
        </Link>
    </li>
</ul>
}