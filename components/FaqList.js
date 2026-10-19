/* The FAQ accordion, shared by The Canopy page and the homepage. Plain <details>, no JS. */
export default function FaqList({ items }) {
  return (
    <div>
      {items.map(({ q, a }) => (
        <details
          key={q}
          className="group bg-[#FFFCF6] border border-brown/10 rounded-[6px] px-6 py-[18px] mb-3 shadow-[0_1px_6px_rgba(59,30,8,0.04)] transition-colors duration-200 hover:border-orange/40 max-md:px-5"
        >
          <summary className="font-serif text-[18px] font-bold text-brown cursor-pointer list-none flex justify-between items-center gap-4">
            {q}
            <span className="text-orange text-[20px] leading-none group-open:rotate-45 transition-transform duration-200" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="text-[16px] text-brown/75 leading-[1.75] mt-3 max-w-[62ch]">{a}</p>
        </details>
      ))}
    </div>
  )
}
