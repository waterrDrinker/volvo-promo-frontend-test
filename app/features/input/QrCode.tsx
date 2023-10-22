import Image from "next/image"

const QrCode = () => {
	return (
		<div className="flex gap-x-2.5 justify-end items-center absolute bottom-0 right-0 -translate-x-10 -translate-y-10">
			<div className="w-[194px] font-medium leading-[18.75px] text-white uppercase text-right">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</div>
			<div>
				<Image
					src='/images/qr-code.png'
					alt="qr-code"
					width={110}
					height={110}
				/>
			</div>
		</div>
	)
}

export default QrCode