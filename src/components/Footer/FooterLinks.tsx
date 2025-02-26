import { footer } from "@mock"

function FooterLinks () {
  return (
    <>
      {footer.links.map((link: ILink) => (
        <a
          href={link.href}
          key={link.name}
          className="text-[12px] text-neutral-400"
        >
          {link.name}
        </a>
      ))}
    </>
  )
}

export default FooterLinks