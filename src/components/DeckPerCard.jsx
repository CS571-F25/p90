import fetch from "node-fetch";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImI3NTZiMmQxLWE1ZTUtNDM0Yy1hYjE5LWJjZmNiNjA3Y2JiOSIsImlhdCI6MTc2MzU4NzI0Mywic3ViIjoiZGV2ZWxvcGVyL2ZjNTdkMTMwLTcwYzMtZThjMS1hZmZiLTFiMmM0MmYyNTBkZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Mi4zMy4yLjI0NiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.6pmfKFLWxO1mHDRM6gu9Wel2uhcgQ-MkyShfcWuLdAKLzZnhABWayXOTYTtlF47G3m8Um7cK64FyzjvTmbrRiw";

const x = await fetch("https://api.clashroyale.com/v1/cards", {
    headers: { Authorization: `Bearer ${token}` }
})

  console.log(x.json());

export default function DeckPerCard(props) {
    return <div>
        <h1>Deck Per Card!</h1>

        
    </div>
}